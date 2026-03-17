import { useCallback, useEffect, useRef, useState } from 'react';

function TimerComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  // 최신 count 값 유지
  useEffect(() => {
    countRef.current = count;
  }, [count]);

  // 콜백 함수는 단 한 번만 생성
  const handleAlert = useCallback(() => {
    setTimeout(() => {
      alert(`현재 count 값: ${countRef.current}`); // 최신 값
    }, 1000);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
      <button onClick={handleAlert}>1초 후 alert</button>
    </div>
  );
}

export default TimerComponent;