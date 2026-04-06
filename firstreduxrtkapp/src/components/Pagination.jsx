export default function Pagination({ totalPages, currentPage, onPageChange }) {
  if (!totalPages || totalPages <= 1) return null

  const pages = []
  const delta = 2
  for (let i = Math.max(1, currentPage - delta); i <= Math.min(totalPages, currentPage + delta); i++) {
    pages.push(i)
  }

  return (
    <div className="flex items-center justify-center gap-1 mt-8">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-3 py-1.5 rounded border text-sm disabled:opacity-40 hover:bg-indigo-50 transition-colors"
      >
        «
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1.5 rounded border text-sm disabled:opacity-40 hover:bg-indigo-50 transition-colors"
      >
        ‹
      </button>

      {pages[0] > 1 && <span className="px-2 text-gray-400">…</span>}

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`px-3 py-1.5 rounded border text-sm transition-colors ${
            p === currentPage
              ? 'bg-indigo-600 text-white border-indigo-600 font-semibold'
              : 'hover:bg-indigo-50'
          }`}
        >
          {p}
        </button>
      ))}

      {pages[pages.length - 1] < totalPages && <span className="px-2 text-gray-400">…</span>}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1.5 rounded border text-sm disabled:opacity-40 hover:bg-indigo-50 transition-colors"
      >
        ›
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-3 py-1.5 rounded border text-sm disabled:opacity-40 hover:bg-indigo-50 transition-colors"
      >
        »
      </button>
    </div>
  )
}
