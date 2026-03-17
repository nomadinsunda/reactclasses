import React from 'react';
import UserList from './UserList';

// 클래스형 컴포넌트 : 사실 클래스가 아님...(사용하지 않음...)
// 함수형 리액트 컴포넌트 : React Element를 리턴!
function Main({ isAdmin }) {
  // App 컴포넌트가 전달한 isAdmin을 수정할 수 없음.
  return (
    <main>
      <h2>{isAdmin ? "👑 관리자 페이지입니다" : "👤 일반 사용자 페이지입니다"}</h2>
      <UserList /> // html 태그 문법이 아님:
    </main>
  );
}

export default Main;
