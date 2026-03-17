import React from 'react'

function Footer({ copyright }) {
  return (
    <footer style={{ backgroundColor: '#f9f9f9', padding: '10px', marginTop: '20px' }}>
      <p>{copyright}</p>
    </footer>
  )
}

export default Footer
