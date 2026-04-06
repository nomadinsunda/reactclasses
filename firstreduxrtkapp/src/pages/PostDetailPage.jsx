import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  useGetPostByIdQuery,
  useGetCommentsByPostIdQuery,
  useDeletePostMutation,
} from '../store/postsApi'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'

export default function PostDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const {
    data: post,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetPostByIdQuery(id)

  const { data: comments = [] } = useGetCommentsByPostIdQuery(id)

  const [deletePost] = useDeletePostMutation()

  const handleDelete = async () => {
    if (window.confirm('이 게시글을 삭제하시겠습니까?')) {
      await deletePost(Number(id))
      navigate('/')
    }
  }

  if (isLoading) return <LoadingSpinner message="게시글을 불러오는 중..." />
  if (isError) return <ErrorMessage message={error?.message || '오류가 발생했습니다.'} onRetry={refetch} />
  if (!post) return null

  return (
    <div className="max-w-3xl mx-auto">
      {/* 상단 네비게이션 */}
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
          ← 목록으로
        </Link>
      </div>

      {/* 게시글 본문 */}
      <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h1 className="text-xl font-bold text-gray-900 leading-snug capitalize">
            {post.title}
          </h1>
          <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded shrink-0">
            #{post.id}
          </span>
        </div>

        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">
            U{post.userId}
          </div>
          <span className="text-sm text-gray-600">User {post.userId}</span>
        </div>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {post.body}
        </p>

        {/* 액션 버튼 */}
        <div className="flex gap-2 mt-6 pt-4 border-t border-gray-100">
          <Link
            to={`/posts/${post.id}/edit`}
            className="px-4 py-2 bg-amber-500 text-white rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors"
          >
            수정
          </Link>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
          >
            삭제
          </button>
        </div>
      </article>

      {/* 댓글 섹션 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-base font-semibold text-gray-800 mb-4 flex items-center gap-2">
          💬 댓글
          <span className="text-xs font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            {comments.length}
          </span>
        </h2>

        {comments.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-8">댓글이 없습니다.</p>
        ) : (
          <ul className="divide-y divide-gray-50">
            {comments.map((comment) => (
              <li key={comment.id} className="py-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-sm font-medium text-gray-700">{comment.name}</span>
                  <span className="text-xs text-indigo-500">{comment.email}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{comment.body}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
