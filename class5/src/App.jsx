import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Welcome from './components/Welcome'

function App() {
  return (
    <>
      <Welcome name="hello" />
      <Header title="📦 React Props 실습 데모" />
      <Main />
      <Footer copyright="© 2025 Props Academy" />
    </>
  )
}

export default App
