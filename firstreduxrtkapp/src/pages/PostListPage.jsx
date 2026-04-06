import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useGetPostsQuery, useDeletePostMutation } from '../store/postsApi'
import { setSearchKeyword, setCurrentPage } from '../store/uiSlice'
import Pagination from '../components/Pagination'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'

export default function PostListPage() {
  const dispatch = useDispatch()
  const { searchKeyword, currentPage, postsPerPage } = useSelector((s) => s.ui)

  const { data: posts = [], isLoading, isError, error, refetch } = useGetPostsQuery()
  const [deletePost] = useDeletePostMutation()

  // 클라이언트 사이드 검색 필터
  const filteredPosts = searchKeyword.trim()
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          p.body.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : posts

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startNum = (currentPage - 1) * postsPerPage
  const paginatedPosts = filteredPosts.slice(startNum, startNum + postsPerPage)

  const handleDelete = (id, title) => {
    if (window.confirm(`"${title.slice(0, 20)}..." 게시글을 삭제하시겠습니까?`)) {
      deletePost(id)
    }
  }

  if (isLoading) return <LoadingSpinner message="게시글을 불러오는 중..." />
  if (isError) return <ErrorMessage message={error?.message || '오류가 발생했습니다.'} onRetry={refetch} />

  return (
    <div>
      {/* 검색 바 */}
      <div className="mb-6 flex gap-2">
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => dispatch(setSearchKeyword(e.target.value))}
          placeholder="제목 또는 내용으로 검색..."
          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
        />
        {searchKeyword && (
          <button
            onClick={() => dispatch(setSearchKeyword(''))}
            className="px-4 py-2.5 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200 transition-colors"
          >
            초기화
          </button>
        )}
        <Link
          to="/posts/new"
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          + 글쓰기
        </Link>
      </div>

      {/* 결과 요약 */}
      <p className="text-sm text-gray-500 mb-3">
        전체 <span className="font-semibold text-gray-700">{filteredPosts.length}</span>건
        {searchKeyword && ` (검색어: "${searchKeyword}")`}
      </p>

      {/* 게시글 테이블 */}
      {paginatedPosts.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-3">📭</p>
          <p>검색 결과가 없습니다.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-gray-500 font-medium w-16">번호</th>
                <th className="px-4 py-3 text-left text-gray-500 font-medium">제목</th>
                <th className="px-4 py-3 text-left text-gray-500 font-medium w-20 hidden sm:table-cell">작성자</th>
                <th className="px-4 py-3 text-center text-gray-500 font-medium w-28">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {paginatedPosts.map((post, idx) => (
                <tr key={post.id} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="px-4 py-3 text-gray-400">{startNum + idx + 1}</td>
                  <td className="px-4 py-3">
                    <Link
                      to={`/posts/${post.id}`}
                      className="text-gray-800 hover:text-indigo-600 font-medium line-clamp-1 transition-colors"
                    >
                      {post.title}
                    </Link>
                    <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{post.body}</p>
                  </td>
                  <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">
                    User {post.userId}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-1.5">
                      <Link
                        to={`/posts/${post.id}/edit`}
                        className="px-2.5 py-1 rounded bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors text-xs font-medium"
                      >
                        수정
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id, post.title)}
                        className="px-2.5 py-1 rounded bg-red-50 text-red-500 hover:bg-red-100 transition-colors text-xs font-medium"
                      >
                        삭제
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => dispatch(setCurrentPage(page))}
      />
    </div>
  )
}
