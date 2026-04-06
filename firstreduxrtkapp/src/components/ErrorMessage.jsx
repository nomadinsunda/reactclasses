export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="text-5xl">⚠️</div>
      <p className="text-red-600 font-medium">{message || '오류가 발생했습니다.'}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors"
        >
          다시 시도
        </button>
      )}
    </div>
  )
}
