import React, { useRef } from 'react';
import MyInput from './MyInput';

const Main = () => {
  const myInputRef = useRef();

  const handleFocus = () => {
    myInputRef.current?.focus();
  };

  const handleClear = () => {
    myInputRef.current?.clear();
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h2>MyInput 컴포넌트 조작</h2>
      <MyInput ref={myInputRef} />
      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleFocus} style={{ marginRight: '10px' }}>
          포커스
        </button>
        <button onClick={handleClear}>
          지우기
        </button>
      </div>
    </main>
  );
};

export default Main;
