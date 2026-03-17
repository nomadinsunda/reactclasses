import React from 'react';

const EmailInput = ({ email, setEmail }) => {
  return (
    <section style={{ marginTop: '20px' }}>
      <h2>📧 이메일 입력</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일을 입력하세요"
        style={{ padding: '8px', width: '60%' }}
      />
    </section>
  );
};

export default EmailInput;
