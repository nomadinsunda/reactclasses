// src/App.jsx
function App() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="text-3xl font-black text-primary">Hello, daisyUI v5!</h1>
      
      {/* daisyUI 버튼 그룹 */}
      <div className="flex gap-2">
        <button className="btn btn-primary shadow-lg">주요 버튼</button>
        <button className="btn btn-secondary">보조 버튼</button>
        <button className="btn btn-outline btn-accent">라인 버튼</button>
      </div>

      {/* daisyUI 배지 및 통계 컴포넌트 */}
      <div className="stats shadow bg-base-100">
        <div className="stat">
          <div className="stat-title">방문자 수</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">지난 달 대비 21% 증가</div>
        </div>
      </div>
    </div>
  )
}

export default App