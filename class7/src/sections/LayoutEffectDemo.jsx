// src/sections/LayoutEffectDemo.jsx
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function LayoutEffectDemo() {
  const [text, setText] = useState('레이아웃 측정 예제');
  const [widthEffect, setWidthEffect] = useState(null);
  const [widthLayoutEffect, setWidthLayoutEffect] = useState(null);

  // 'Ref' 라는 props(리액트가 관리)가 있고
  //  : DOM 엘리먼트를 직접 제어할 수 있도록 해 주는 매개체(통로)
  // useRef 라는 따로 존재!!!
  const refEffect = useRef(null);
  const refLayoutEffect = useRef(null);

  // DOM 커밋(리액트의 렌더 단계중 하나) 직후, paint 이전에 동기 실행
  useLayoutEffect(() => {
    if (refLayoutEffect.current) {
      setWidthLayoutEffect(refLayoutEffect.current.getBoundingClientRect().width);
    }
  }, [text]);

   // 웹 브라우저의 paint 작업 이후 비동기로 실행
  useEffect(() => {
    if (refEffect.current) {
      setWidthEffect(refEffect.current.getBoundingClientRect().width);
    }
  }, [text]);

  return (
    <div className="card">
      <div className="section-title">
        <span>10.</span>
        <h2>useEffect vs useLayoutEffect ⚖️</h2>
      </div>

      <p style={{ fontSize: 13 }}>
        <code>useEffect</code>는 paint 이후 비동기적으로 실행되고,
        <br />
        <code>useLayoutEffect</code>는 DOM 커밋 직후, paint 이전에 동기적으로 실행됩니다.
        <br />
        대부분의 경우 <strong>useEffect가 기본 선택</strong>이며, 레이아웃 측정/동기 DOM 업데이트가 필요한
        특수한 경우에만 <code>useLayoutEffect</code>를 사용합니다.
      </p>

      <div className="button-row">
        <input
          style={{ padding: '4px 8px', borderRadius: 6, border: '1px solid #cbd5e1', flex: 1 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <span className="badge">useEffect로 측정</span>
        <div
          ref={refEffect} 
          style={{
            display: 'inline-block',
            padding: '6px 10px',
            borderRadius: 8,
            background: '#e5f0ff',
            fontSize: 13,
          }}
        >
          {text}
        </div>
        <p style={{ fontSize: 13, marginTop: 4 }}>
          width (effect): <strong>{widthEffect ?? '측정 중...'}</strong>
        </p>
      </div>

      <div className="card">
        <span className="badge">useLayoutEffect로 측정</span>
        <div
          ref={refLayoutEffect}
          style={{
            display: 'inline-block',
            padding: '6px 10px',
            borderRadius: 8,
            background: '#dcfce7',
            fontSize: 13,
          }}
        >
          {text}
        </div>
        <p style={{ fontSize: 13, marginTop: 4 }}>
          width (layoutEffect): <strong>{widthLayoutEffect ?? '측정 중...'}</strong>
        </p>
      </div>

      <p style={{ fontSize: 12, color: '#6b7280', marginTop: 8 }}>
        실제 렌더 타이밍 차이는 눈으로 보긴 어렵지만, 개념적으로는{' '}
        <strong>useLayoutEffect가 렌더링을 블록킹</strong>할 수 있다는 점 때문에
        <br />
        “정말 필요한 경우에만” 사용하는 것이 좋습니다.
      </p>
    </div>
  );
}
