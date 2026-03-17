import React from 'react';

function UserList() {
  const users = ['홍길동', '김코딩', '이자바'];
  const isEmpty = users.length === 0;

  return (
    <section>
      <h3>📋 사용자 목록</h3>
      {isEmpty ? (
        <p>사용자가 없습니다.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default UserList;
