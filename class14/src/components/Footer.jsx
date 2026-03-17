import React, { useContext } from 'react'
import { AppContext } from './AppContext'

function Footer() {
  const { login, inputRef } = useContext(AppContext)

  const handleLogin = () => {
    const val = inputRef.current.value.trim()
    if (val) login(val)
  }

  return (
    <footer style={{ padding: '10px', background: '#eee' }}>
      <input ref={inputRef} placeholder="Enter name" />
      <button onClick={handleLogin}>Login</button>
    </footer>
  )
}

export default Footer
