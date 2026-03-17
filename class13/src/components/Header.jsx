import React, { useContext } from 'react'
import { AppContext } from './AppContext'

function Header() {
  // AppContext의 Consumer을 사용하고 있음
  const { user } = useContext(AppContext)
  return (
    <header style={{ background: '#ddd', padding: '10px' }}>
      <h1>📌 React Context Dashboard</h1>
      <h3>Welcome, {user}</h3>
    </header>
  )
}

export default Header