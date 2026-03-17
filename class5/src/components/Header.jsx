import React from 'react'

function Header({ title }) {
  return (
    <header style={{ backgroundColor: '#f1f1f1', padding: '10px' }}>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
