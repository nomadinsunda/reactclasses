import React, { useState, useEffect, useMemo } from 'react';

function HeavyCalculation() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
      const intervalId = setInterval(() => {
          setTime(new Date());
      }, 1000);

      return () => clearInterval(intervalId);

  }, []);


  // 무거운 연산 함수 (실제로는 큰 루프 연산 시뮬레이션)
  const heavySquare = (n) => {
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++heavySquare');
    console.log('⚠️ 무거운 연산 실행중...');
    let i = 0;
    while (i < 1_000_000_000) i++; // CPU 부하 시뮬레이션
    console.log('-------------------------------------------------------heavySquare');
    return n * n;
  };

  console.log("HeavyCalculation rerendering")

  // useMemo로 결과를 캐싱
  const squaredValue = useMemo(() => heavySquare(number), [number]);

  console.log("HeavyCalculation squaredValue:" + squaredValue);


  return (
    <section>

      <h2>실시간 시간 </h2>
      <div style={{ fontSize: '24px', fontFamily: 'monospace' }}>
            현재 시간: {time.toLocaleTimeString()}
      </div>
      
      <h2>⚡ useMemo로 무거운 연산 최적화</h2>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value || 0))}
          style={{ padding: '10px', width: '100px' }}
        />
        <p>제곱 결과: {squaredValue}</p>
      </div>
      <button onClick={() => setCount((c) => c + 1)}>다른 상태 증가: {count}</button>
    </section>
  );
}

export default HeavyCalculation;
