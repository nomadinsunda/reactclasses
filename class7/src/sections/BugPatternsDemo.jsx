// src/sections/BugPatternsDemo.jsx
import { useEffect, useState } from 'react';

export default function BugPatternsDemo() {
  const [safeCount, setSafeCount] = useState(0);
  const [intervalCount, setIntervalCount] = useState(0);
  const [showInterval, setShowInterval] = useState(false);

  // ❌ 무한 루프 예시는 실제로 실행하면 앱이 망가져서, 여기서는 "주석"으로만 설명합니다.
  const infiniteLoopExample = `// ❌ 나쁜 예 - 의존성 배열 없음 + setState
useEffect(() => {
  setSafeCount((prev) => prev + 1);
}); // 매 렌더마다 실행 → 다시 setCount → 무한 루프`;

  // ✅ 마운트 시 한 번만 count를 증가시키는 예
  useEffect(() => {
    setSafeCount((prev) => prev + 1);
  }, []); // mount 시 딱 한 번만

  // stale closure 문제를 보여주기 위한 예제
  const staleClosureBadExample = `// ❌ 나쁜 예 - stale closure
  // 다음 useEffect 함수의 콜백함수는 자바스크립트의 클로저 함수가 아님! 
useEffect(() => {
  const id = setInterval(() => {
    console.log(safeCount);      // 항상 초기 count만 출력
    setSafeCount(safeCount + 1);     // 항상 같은 값 기준으로 +1
  }, 1000);
}, []); // safeCount를 deps에 넣지 않음`;

const staleClosureGoodExample = `// ✅ 좋은 예 - 함수형 업데이트
useEffect(() => {
  const id = setInterval(() => {
    setSafeCount((prev) => prev + 1); // 이전 값에 의존하는 업데이트
  }, 1000);

  return () => clearInterval(id);
}, []);`;

  useEffect(() => {
    if (!showInterval) return;

    const id = setInterval(() => {
      // ✅ 함수형 업데이트: stale closure 문제 회피
      setIntervalCount((c) => c + 1);
    }, 1000);

    return () => { 
      clearInterval(id)
    };
  }, [showInterval]);  

  return (
    <div className="card">
      <div className="section-title">
        <span>8.</span>
        <h2>자주 터지는 버그 패턴 🧨</h2>
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <span className="badge">무한 렌더링 루프</span>
        <p style={{ fontSize: 13 }}>
          의존성 배열 없이 <code>setState</code>를 호출하면 렌더 → effect → setState → 렌더 → … 로
          이어지는 무한 루프가 발생합니다.
        </p>
        <div className="code">{infiniteLoopExample}</div>
        <p style={{ fontSize: 13 }}>
          아래 <code>safeCount</code>는 <strong>마운트 시 한 번만</strong> 증가하도록 만들어 두었습니다.
        </p>
        <p style={{ fontSize: 13 }}>
          safeCount: <strong>{safeCount}</strong>
        </p>
      </div>

      <div className="card">
        <span className="badge">stale closure</span>
        <p style={{ fontSize: 13 }}>
          <code>[]</code> 의존성 배열로 한 번만 실행되는 effect 안에서 state를 직접 참조하면, 그 state
          값이 <strong>“처음 렌더 시점의 값으로 고정”</strong>되는 문제가 생길 수 있습니다.
        </p>
        <div className="code">{staleClosureBadExample}</div>
        <p style={{ fontSize: 13, marginTop: 8 }}>➡ 이를 함수형 업데이트로 바꾸면:</p>
        <div className="code">{staleClosureGoodExample}</div>

        <div className="button-row" style={{ marginTop: 8 }}>
          <button
            className={`btn ${showInterval ? 'danger' : ''}`}
            onClick={() => setShowInterval((s) => !s)}
          >
            {showInterval ? '인터벌 정지' : '인터벌 시작'}
          </button>
        </div>
        <p style={{ fontSize: 13 }}>
          intervalCount: <strong>{intervalCount}</strong>
        </p>
      </div>
    </div>
  );
}
