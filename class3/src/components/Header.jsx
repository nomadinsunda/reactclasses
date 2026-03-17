
import React from 'react';

function Header({ title }) {
  const now = new Date().toLocaleString();

  return (
    <header style={{ backgroundColor: '#f2f2f2', padding: '10px' }}>
      <h1>{title}</h1>
      <p>{now}에 접속함</p>
    </header>
  );
}

export default Header;
