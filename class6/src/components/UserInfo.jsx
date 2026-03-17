import React from 'react';


const UserInfo = ({ username, age, email }) => {

  

  return (
    <section style={{ marginTop: '30px' }}>
      <h2>🧾 사용자 정보</h2>
      <p>이름: <strong>{username}</strong></p>
      <p>나이: <strong>{age}</strong></p>
      <p>이메일: <strong>{email}</strong></p>
    </section>
  );
};

export default UserInfo;
