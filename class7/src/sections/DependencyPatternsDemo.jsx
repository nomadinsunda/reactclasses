// src/sections/DependencyPatternsDemo.jsx
import { useEffect, useState } from 'react';

function Logs({ logs }) {
  return (
    <div className="log-box">
      {logs.map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
    </div>
  );
}

export default function DependencyPatternsDemo() {
  const [logsNoDeps, setLogsNoDeps] = useState([]);
  const [logsEmpty, setLogsEmpty] = useState([]);
  const [logsDeps, setLogsDeps] = useState([]);
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);

  // 3-1. 의존성 배열 없음: 매 렌더링 후 실행
  // https://ko.react.dev/blog/2025/10/07/react-compiler-1 참고, 
  // react 19.2 버전부터는 컴파일러가 다음과 같은 infinite chain of updates를 warning이 아니라
  // 컴파일 에러로 처리함!!!
  useEffect(() => {
    setLogsNoDeps((prev) => [...prev, `렌더링 이후마다 실행 (timestamp=${Date.now()})`]);
  });

  // 3-2. []: mount / unmount 시 한 번씩
  useEffect(() => {
    setLogsEmpty((prev) => [...prev, '마운트 시 한 번 실행']);

    return () => {
      setLogsEmpty((prev) => [...prev, '언마운트 시 한 번 실행']);
    };
  }, []);

  // 3-3. [value, page]: 특정 값 변화에 반응
  useEffect(() => {
    setLogsDeps((prev) => [
      ...prev,
      `value="${value}", page=${page} 변경에 반응 (timestamp=${Date.now()})`,
    ]);
  }, [value, page]);

  return (
    <div className="card">
      <div className="section-title">
        <span>3.</span>
        <h2>의존성(deps) 배열 패턴 🔁</h2>
      </div>

      <p>세 가지 패턴을 동시에 비교해 볼 수 있는 예제입니다.</p>

      <div className="card" style={{ marginTop: 12 }}>
        <span className="badge">pattern 1</span>
        <strong>의존성 배열 없음 (매 렌더링마다)</strong>
        <p style={{ fontSize: 13, marginTop: 4 }}>
          아래 input의 value를 바꾸거나 버튼을 눌러 re-render를 유도하면 로그가 계속 쌓입니다.
        </p>
        <Logs logs={logsNoDeps} />
      </div>

      <div className="card">
        <span className="badge">pattern 2</span>
        <strong>빈 배열 [] (mount / unmount)</strong>
        <p style={{ fontSize: 13 }}>
          이 컴포넌트는 <code>DependencyPatternsDemo</code>가 처음 마운트될 때 한 번, 그리고 탭을
          바꾸어 언마운트될 때 한 번 로그를 남깁니다.
        </p>
        <Logs logs={logsEmpty} />
      </div>

      <div className="card">
        <span className="badge">pattern 3</span>
        <strong>[value, page] 특정 값 변화에만 실행</strong>

        <div className="button-row">
          <input
            style={{ padding: '4px 8px', borderRadius: 6, border: '1px solid #cbd5e1' }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="searchTerm 비슷한 값"
          />
          <button className="btn" onClick={() => setPage((p) => p + 1)}>
            page 증가 (현재: {page})
          </button>
        </div>

        <p style={{ fontSize: 13 }}>
          <code>value</code> 또는 <code>page</code>가 바뀔 때만 effect가 실행됩니다.
        </p>
        <Logs logs={logsDeps} />
      </div>
    </div>
  );
}
