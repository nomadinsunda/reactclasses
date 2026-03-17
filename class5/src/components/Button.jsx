import React from 'react'

function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: '10px',
        padding: '8px 16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  )
}

export default Button
