import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// src/App.jsx
function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900 text-white">
      <div className="text-center p-10 border border-zinc-700 rounded-2xl shadow-2xl bg-zinc-800">
        <h1 className="text-4xl font-black text-blue-400 mb-4">
          Tailwind CSS v4 + Vite 🚀
        </h1>
        <p className="text-zinc-400">
          JavaScript 기반 React 프로젝트 세팅 완료!
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-full transition-all">
          시작하기
        </button>
      </div>
    </div>
  )
}

export default App