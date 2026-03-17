import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // 부모가 접근할 수 있는 커스텀 메서드 정의
  useImperativeHandle(
    ref, 
    () => (
      {
        focus: () => {
          inputRef.current.focus();
        },

        clear: () => {
          inputRef.current.value = '';
        }
      }
    )
  );
  // ref.focus --> () => { inputRef.current.focus(); }
  // ref.clear --> () => { inputRef.current.value = ''; }

  return <input ref={inputRef} placeholder="여기에 입력" style={{ padding: '10px', fontSize: '16px' }} />;
});

export default MyInput;
