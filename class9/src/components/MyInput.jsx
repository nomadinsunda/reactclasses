
import { useRef, useImperativeHandle } from 'react';

// ...props : ... --> spread/ rest ?
// ...props : ... --> rest 연산자는 대입 연산자의 왼쪽(값을 저장할 수 있는 변수 위치)에서 사용할 수 있음.
// 파라미터 = 아규먼트
// props로 단 하나의 'placeholder="Enter your name"' props가 전달
function MyInput({ ref, ...props }) {
  const inputRef = useRef(null);

  // 참고: https://ko.react.dev/reference/react/useImperativeHandle 
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      },
    };
  }, []);
  // 다음 ...은 spread? rest?...
  // : spread 연산자임 -> 대입연산자의 오른쪽 사이드에 옴 -> 대입연산자의 오른쪽에 오는 것은 값!!
  return <input {...props} ref={inputRef} />;
};

export default MyInput;