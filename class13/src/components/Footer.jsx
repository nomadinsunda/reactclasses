import React, { useContext } from 'react'
import { AppContext } from './AppContext'

function Footer() {
  const { login, inputRef } = useContext(AppContext)

  const handleLogin = () => {
    const name = inputRef.current.value.trim()
    if (name) login(name)
  }

  return (
    <footer style={{ background: '#eee', padding: '10px' }}>
      <input ref={inputRef} placeholder="Enter username" />
      <button onClick={handleLogin}>로그인</button>
    </footer>
  )
}

export default Footer