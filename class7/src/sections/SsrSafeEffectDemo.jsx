// src/sections/SsrSafeEffectDemo.jsx
import { useEffect, useState } from 'react';

export default function SsrSafeEffectDemo() {
  const [theme, setTheme] = useState('light');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Next.js 같은 SSR 환경에서는 서버에서는 실행되지 않고,
    // 클라이언트에서 hydration 이후에만 실행됩니다.
    const stored = window.localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
      setLogs((prev) => [...prev, `localStorage에서 theme="${stored}" 읽음`]);
    } else {
      setLogs((prev) => [...prev, '저장된 theme가 없어서 기본값 "light" 사용']);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
    setLogs((prev) => [...prev, `theme를 "${theme}"로 저장`]);
  }, [theme]);

  const checklist = [
    'effect 안에는 “렌더링 후에 해야 할 일”만 넣기',
    'effect 내부에서 사용하는 값들은 기본적으로 deps에 넣기',
    '이전 state에 의존하면 함수형 업데이트(setX(prev => ...)) 사용',
    '이벤트 리스너/타이머/구독은 반드시 cleanup에서 정리',
    'derived state는 effect가 아니라 계산/메모/렌더링 중 계산으로 해결',
    '사용자 이벤트 반응은 event handler(onClick, onChange) 안에서 처리',
    'useLayoutEffect는 정말 필요한 레이아웃 측정/동기 DOM 업데이트에만 사용',
  ];

  return (
    <div className="card">
      <div className="section-title">
        <span>11~12.</span>
        <h2>SSR 환경에서의 useEffect & 체크리스트 🌐✅</h2>
      </div>

      <p style={{ fontSize: 13 }}>
        SSR(예: Next.js)에서는 서버 렌더링 단계에서 <code>window</code>나{' '}
        <code>localStorage</code> 같은 브라우저 API가 존재하지 않습니다.
        <br />
        이런 코드는 <strong>반드시 useEffect 안에서만</strong> 접근해야 안전합니다.
      </p>

      <div className="card" style={{ marginTop: 12 }}>
        <span className="badge">브라우저 전용 API(localStorage) 사용</span>
        <p style={{ fontSize: 13 }}>
          현재 theme: <strong>{theme}</strong>
        </p>
        <div className="button-row">
          <button
            className={`btn ${theme === 'light' ? 'secondary' : ''}`}
            onClick={() => setTheme('light')}
          >
            light
          </button>
          <button
            className={`btn ${theme === 'dark' ? 'secondary' : ''}`}
            onClick={() => setTheme('dark')}
          >
            dark
          </button>
        </div>
        <div className="log-box" style={{ marginTop: 8 }}>
          {logs.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      </div>

      <div className="card">
        <span className="badge">useEffect 체크리스트</span>
        <ul style={{ fontSize: 13, paddingLeft: 18 }}>
          {checklist.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
