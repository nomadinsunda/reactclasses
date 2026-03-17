import React from 'react';

const Counter = ({ count, setCount }) => {
  return (
    <section style={{ marginTop: '30px' }}>
      <h2>🧮 카운터</h2>
      <p>현재 값: <strong>{count}</strong></p>
      <button onClick={() => setCount(prev => prev + 1)}>+1</button>
      <button onClick={() => setCount(prev => prev - 1)} style={{ marginLeft: '10px' }}>-1</button>
    </section>
  );
};

export default Counter;
