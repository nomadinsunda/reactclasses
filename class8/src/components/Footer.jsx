const Footer = ({ total }) => {
  return (
    <footer style={{ backgroundColor: '#222', color: '#fff', padding: '1rem', textAlign: 'center' }}>
      <p>총 사용자 수: {total}명</p>
    </footer>
  );
};

export default Footer;
