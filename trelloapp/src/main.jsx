import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/material-icons'
import './index.css'
import App from './App'

// 'as HTMLElement' 타입을 제거하여 순수 자바스크립트 문법으로 변경합니다.
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <App />
)

