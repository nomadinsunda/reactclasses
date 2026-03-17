// src/components/Main.jsx

import Welcome from './Welcome';

function Main() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>👋 리액트 컴포넌트 실습</h1>
      <Welcome name="홍길동" />
      <Welcome name="김코딩" />
      <Welcome name="이자바" />
    </main>
  );
}

export default Main;
