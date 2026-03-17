const Header = ({ title, theme, setTheme }) => {
  return (
    <header style={{ backgroundColor: '#222', color: '#fff', padding: '1rem' }}>
      <h1>{title}</h1>
      <button onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}>
        테마 변경 ({theme})
      </button>
    </header>
  );
};

export default Header;
