// src/sections/CleanupAndLifecycleDemo.jsx
import { useEffect, useState } from 'react';

function ScrollLogger() {
  useEffect(() => {
    function handleScroll() {
      console.log('[ScrollLogger] scrollY =', window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    console.log('📌 [ScrollLogger] scroll 리스너 등록');

    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('🧹 [ScrollLogger] scroll 리스너 제거');
    };
  }, []);

  return (
    <div style={{ fontSize: 13, color: '#4b5563' }}>
      window scroll 이벤트 리스너가 등록되어 있습니다. 스크롤해 보세요 (콘솔 확인).
    </div>
  );
}

function LifecycleLogs({ value }) {
  useEffect(() => {
    console.log('✅ [LifecycleLogs] mount 또는 value 변경 후 실행, value=', value);

    return () => {
      console.log('🧹 [LifecycleLogs] cleanup: 다음 effect 직전 또는 언마운트, value=', value);
    };
  }, [value]);

  return (
    <p style={{ fontSize: 13 }}>
      현재 value: <strong>{value}</strong>
    </p>
  );
}

export default function CleanupAndLifecycleDemo() {
  const [value, setValue] = useState(0);
  const [showScrollLogger, setShowScrollLogger] = useState(true);

  return (
    <div className="card">
      <div className="section-title">
        <span>4~6.</span>
        <h2>렌더링 사이클 & cleanup & 라이프사이클 매핑 🧬</h2>
      </div>

      <p>
        이 섹션은 <strong>“effect가 언제 실행되고, cleanup은 언제 불리는지”</strong>를 로그로 확인하는
        용도입니다. 개발자 도구 콘솔을 열어두고 보시면 좋습니다.
      </p>

      <div className="card" style={{ marginTop: 12 }}>
        <span className="badge">render → commit → effect</span>
        <p style={{ fontSize: 13 }}>
          버튼을 눌러 <code>value</code>를 변경하면,
          <br />
          <code>LifecycleLogs</code>의 effect & cleanup 호출 순서를 콘솔에서 볼 수 있습니다.
        </p>

        <div className="button-row">
          <button className="btn" onClick={() => setValue((v) => v + 1)}>
            value 증가
          </button>
        </div>

        <LifecycleLogs value={value} />
      </div>

      <div className="card">
        <span className="badge">componentDidMount / WillUnmount 대응</span>
        <p style={{ fontSize: 13 }}>
          아래 토글 버튼으로 <code>ScrollLogger</code> 컴포넌트를 마운트/언마운트하면서
          <br />
          리스너 등록/제거 시점을 확인해 보세요.
        </p>

        <div className="button-row">
          <button
            className={`btn ${showScrollLogger ? 'danger' : ''}`}
            onClick={() => setShowScrollLogger((s) => !s)}
          >
            {showScrollLogger ? 'ScrollLogger unmount' : 'ScrollLogger mount'}
          </button>
        </div>

        {showScrollLogger && <ScrollLogger />}
      </div>
    </div>
  );
}
