import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  return (
    <header className="bg-indigo-700 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight hover:text-indigo-200 transition-colors">
          📋 게시판
        </Link>
        <nav className="flex gap-4 text-sm font-medium">
          <Link
            to="/"
            className={`hover:text-indigo-200 transition-colors pb-1 border-b-2 ${
              location.pathname === '/' ? 'border-white' : 'border-transparent'
            }`}
          >
            목록
          </Link>
          <Link
            to="/posts/new"
            className={`hover:text-indigo-200 transition-colors pb-1 border-b-2 ${
              location.pathname === '/posts/new' ? 'border-white' : 'border-transparent'
            }`}
          >
            글쓰기
          </Link>
        </nav>
      </div>
    </header>
  )
}
