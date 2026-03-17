import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#eee', padding: '10px', marginTop: '20px' }}>
      <p>&copy; {new Date().getFullYear()} React JSX 예제 프로젝트</p>
    </footer>
  );
}

export default Footer;
