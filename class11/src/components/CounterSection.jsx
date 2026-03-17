import React, { useState, useCallback } from 'react';
import ChildButton from './ChildButton';

function CounterSection() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // 매번 새로운 함수가 생성되지 않도록 useCallback 사용
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const toggleState = () => {
    setToggle((prev) => !prev);
  };

  return (
    <section>
      <h2>🔁 useCallback 최적화</h2>
      <p>카운트: {count}</p>
      <ChildButton onClick={handleIncrement} label="카운트 증가" />
      <button onClick={toggleState} style={{ marginLeft: '10px' }}>
        상태 토글: {toggle ? 'ON' : 'OFF'}
      </button>
    </section>
  );
}

export default CounterSection;
