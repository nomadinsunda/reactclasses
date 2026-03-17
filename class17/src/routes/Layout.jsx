import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
  /*
  ✔ 1) |
      파이프 문자.
      보이는 그대로 구분자(separator) 역할을 하는 텍스트.
      예:
        Home | Users | Search
      처럼 네비게이션 링크 사이에 구분선 용도로 사용.

  ✔ 2) {" "}
      JSX에서 공백(space)을 명시적으로 표현하는 방법.
      즉:
        {" "}
        은 한 칸 공백 문자(space)를 의미.
  */
  /*
    <Outlet> 
     : URL이 / 이면 <Home />
             /users 이면 <Users />
             /search?query=test 이면 <Search /> 이 <Outlet /> 위치에 꽂힘!
  */
  <div>
    <nav style={{ marginBottom: 20 }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/users">Users</Link> |{" "}
      <Link to="/search?query=test">Search</Link>
    </nav>
    <Outlet /> 
  </div>
);

export default Layout;
