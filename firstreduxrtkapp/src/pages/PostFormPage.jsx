import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
} from '../store/postsApi'
import LoadingSpinner from '../components/LoadingSpinner'

export default function PostFormPage() {
  const { id } = useParams()
  const isEdit = !!id
  const navigate = useNavigate()

  // 수정 모드일 때만 기존 데이터 조회 (skip으로 불필요한 요청 방지)
  const { data: currentPost, isLoading: isLoadingPost } = useGetPostByIdQuery(id, {
    skip: !isEdit,
  })

  const [createPost, { isLoading: isCreating }] = useCreatePostMutation()
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [userId] = useState(1)
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')

  // 수정 모드: 기존 데이터로 폼 초기화
  useEffect(() => {
    if (isEdit && currentPost) {
      setTitle(currentPost.title)
      setBody(currentPost.body)
    }
  }, [isEdit, currentPost])

  const validate = () => {
    const errs = {}
    if (!title.trim()) errs.title = '제목을 입력해주세요.'
    else if (title.trim().length < 2) errs.title = '제목은 2자 이상 입력해주세요.'
    if (!body.trim()) errs.body = '내용을 입력해주세요.'
    else if (body.trim().length < 5) errs.body = '내용은 5자 이상 입력해주세요.'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitError('')

    const data = { title: title.trim(), body: body.trim(), userId }

    try {
      if (isEdit) {
        await updatePost({ id: Number(id), data }).unwrap()
      } else {
        await createPost(data).unwrap()
      }
      navigate('/')
    } catch (err) {
      setSubmitError(err?.data?.message || (isEdit ? '게시글 수정에 실패했습니다.' : '게시글 작성에 실패했습니다.'))
    }
  }

  const isSubmitting = isCreating || isUpdating

  if (isEdit && isLoadingPost) return <LoadingSpinner message="게시글을 불러오는 중..." />

  return (
    <div className="max-w-2xl mx-auto">
      {/* 브레드크럼 */}
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
          ← 목록으로
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h1 className="text-xl font-bold text-gray-900 mb-6">
          {isEdit ? '게시글 수정' : '새 게시글 작성'}
        </h1>

        {submitError && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 제목 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              제목 <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
                if (errors.title) setErrors((prev) => ({ ...prev, title: '' }))
              }}
              placeholder="제목을 입력하세요"
              className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-colors ${
                errors.title
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-indigo-300'
              }`}
            />
            {errors.title && <p className="mt-1.5 text-xs text-red-500">{errors.title}</p>}
          </div>

          {/* 내용 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              내용 <span className="text-red-400">*</span>
            </label>
            <textarea
              value={body}
              onChange={(e) => {
                setBody(e.target.value)
                if (errors.body) setErrors((prev) => ({ ...prev, body: '' }))
              }}
              placeholder="내용을 입력하세요"
              rows={8}
              className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 resize-none transition-colors ${
                errors.body
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-indigo-300'
              }`}
            />
            {errors.body && <p className="mt-1.5 text-xs text-red-500">{errors.body}</p>}
            <p className="mt-1 text-xs text-gray-400 text-right">{body.length}자</p>
          </div>

          {/* 제출 버튼 */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  처리 중...
                </>
              ) : isEdit ? (
                '수정 완료'
              ) : (
                '작성 완료'
              )}
            </button>
            <Link
              to={isEdit ? `/posts/${id}` : '/'}
              className="px-5 py-2.5 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              취소
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
