import React from 'react';

const Footer = (props) => {
  return (
    <footer style={{ background: '#eee', padding: '10px', textAlign: 'center' }}>
      <p>© 2025 {props.author}</p>
    </footer>
  );
};

export default Footer;
