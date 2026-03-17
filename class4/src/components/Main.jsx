import React, { useRef } from 'react';

const Main = (props) => {
  const inputRef = useRef(null);

  // 🔹 클릭 이벤트
  const handleClick = () => {
    props.logEvent('Click', '버튼이 클릭됨');
  };

  // 🔹 입력 이벤트
  const handleChange = (e) => {
    props.logEvent('Change', `입력값: ${e.target.value}`);
  };

  // 🔹 더블클릭 이벤트
  const handleDoubleClick = () => {
    props.logEvent('DoubleClick', '박스 더블클릭됨');
  };

  // 🔹 키보드 이벤트
  const handleKeyDown = (e) => {
    props.logEvent('KeyDown', `키 입력됨: ${e.key}`);
  };

  // 🔹 포커스 이벤트
  const handleFocus = () => {
    props.logEvent('Focus', '입력창 포커스됨');
  };

  // element에서 포커스가 빠져나가는 순간에 발생하는 이벤트
  const handleBlur = () => {
    props.logEvent('Blur', '입력창 포커스 해제');
  };

  // 🔹 폼 제출 이벤트
  const handleSubmit = (e) => {
    e.preventDefault(); // 디폴트 동작 방지
    const value = inputRef.current.value;
    props.logEvent('Submit', `폼 제출됨. 입력창 값: ${value}`);
  };

  // 🔹 이벤트 버블링 테스트
  const handleParentClick = () => {
    props.logEvent('Bubble', '부모 영역 클릭됨 (버블링)');
  };

  const handleChildClick = () => {
    props.logEvent('ChildClick', '자식 박스 클릭됨');
  };

  // 🔹 캡쳐링 테스트
  const handleCapture = () => {
    props.logEvent('Capture', '캡쳐링 단계에서 실행됨');
  };

  return (
    <main style={{ padding: '20px' }}>
      
      {/* 버튼 이벤트 */}
      <button onClick={handleClick}>클릭</button>

      {/* 입력 이벤트 */}
      <input
        type="text"
        placeholder="입력해주세요"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
        style={{ display: 'block', marginTop: '10px' }}
      />

      {/* 마우스 이벤트 */}
      <div
        onMouseEnter={() => props.logEvent('MouseEnter', '마우스 들어옴')}
        onMouseLeave={() => props.logEvent('MouseLeave', '마우스 나감')}
        onDoubleClick={handleDoubleClick}
        style={{
          marginTop: '10px',
          padding: '10px',
          border: '1px solid gray',
        }}
      >
        마우스 이벤트 박스 (더블클릭 가능)
      </div>

      {/* 폼 이벤트 */}
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <button type="submit">폼 제출</button>
      </form>

      {/* 버블링 / 캡쳐링 구역 */}
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f0f0f0',
        }}
        onClick={handleParentClick}
        onClickCapture={handleCapture}
      >
        부모 영역 (클릭 시 버블링 테스트)
        <div
          onClick={handleChildClick}
          style={{
            marginTop: '10px',
            padding: '10px',
            backgroundColor: '#ddd',
          }}
        >
          자식 박스 (버블링/캡쳐링 순서 확인)
        </div>
      </div>

    </main>
  );
};

export default Main;
