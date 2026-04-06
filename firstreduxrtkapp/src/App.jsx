import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PostListPage from './pages/PostListPage'
import PostDetailPage from './pages/PostDetailPage'
import PostFormPage from './pages/PostFormPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<PostListPage />} />
            <Route path="/posts/new" element={<PostFormPage />} />
            <Route path="/posts/:id" element={<PostDetailPage />} />
            <Route path="/posts/:id/edit" element={<PostFormPage />} />
            <Route
              path="*"
              element={
                <div className="text-center py-20">
                  <p className="text-6xl mb-4">🔍</p>
                  <h2 className="text-xl font-bold text-gray-700 mb-2">페이지를 찾을 수 없습니다</h2>
                  <a href="/" className="text-indigo-600 hover:underline text-sm">홈으로 돌아가기</a>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
