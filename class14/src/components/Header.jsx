import React, { useContext } from 'react'
import { AppContext } from './AppContext'

function Header() {
  const { username } = useContext(AppContext)
  return (
    <header style={{ background: '#ccc', padding: '10px' }}>
      <h2>🧠 React useLayoutEffect Demo</h2>
      <p>Welcome, {username}</p>
    </header>
  )
}

export default Header