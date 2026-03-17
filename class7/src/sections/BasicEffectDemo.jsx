// src/sections/BasicEffectDemo.jsx
import { useEffect, useState } from 'react';

export default function BasicEffectDemo() {
  const [count, setCount] = useState(0);

  // ✅ 렌더링(=> 리액트의 DOM 커밋 후에 Painting 하고 나서) 이후에 실행되는 side effect
  useEffect(() => {
    console.log('✅ [BasicEffectDemo] effect 실행 - DOM 업데이트 이후');
    document.title = `count: ${count}`;

    // cleanup 예시 (여기서는 특별한 정리는 없음)
    return () => {
      console.log('🧹 [BasicEffectDemo] cleanup (다음 effect 직전 또는 언마운트)');
    };
  }, [count]);

  const incrementNum = () => { 
    setCount((c) => c + 1)
  };

  return (
    <div className="card">
      <div className="section-title">
        <span>2.</span>
        <h2>useEffect 기본 개념 & 문법 🧩</h2>
      </div>

      <p>
        함수 컴포넌트는 <strong>“순수 함수처럼, 렌더링 자체는 부수 효과 없이”</strong> 동작하고,
        DOM 업데이트 이후에 해야 할 작업은 <code>useEffect</code> 안에서 처리합니다.
      </p>

      <div className="code">
        {`function BasicEffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // ✅ DOM 커밋 이후 실행: document.title 변경
    document.title = \`count: \${count}\`;

    return () => {
      // 🧹 다음 effect 실행 직전 또는 언마운트 시 호출
    };
  }, [count]);
}`}
      </div>

      <div className="button-row">
        <button className="btn" onClick={incrementNum}>
          count 증가 (+1)
        </button>
        <button className="btn secondary" onClick={() => setCount(0)}>
          count 초기화
        </button>
      </div>

      <p>
        현재 <code>count</code> 값: <strong>{count}</strong>
      </p>
      <p style={{ fontSize: 12, color: '#6b7280' }}>
        브라우저 탭 제목(document.title)도 함께 바뀌는지 확인해 보세요.
      </p>
    </div>
  );
}
