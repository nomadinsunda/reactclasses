import { useEffect, /*useRef, */useState } from "react";

function ScrollTracker() {
  const [y, setY] = useState(0);
  // const handlerRef = useRef();

  // React refs are values that are not needed for rendering. 
  // Refs should only be accessed outside of render, such as in event handlers or effects. 
  // Accessing a ref value (the `current` property) during render can cause your component not to update as expected 
  // (https://react.dev/reference/react/useRef).
  // handlerRef.current = () => {  // react 19.1.1에서는 가능하나, 이후 버전부터는 위와 같은 이유로 되지 않음
  //   setY(window.scrollY);
  // };

  const eventHandler = () => {
    setY(window.scrollY);
  };

  useEffect(() => {
    // const onScroll = () => handlerRef.current(); // 항상 최신 핸들러 // react 19.1.1에서는 가능하나, 이후 버전부터는 위와 같은 이유로 되지 않음
    window.addEventListener('scroll', eventHandler);
    return () => window.removeEventListener('scroll', eventHandler); 
  }, []);

  return <div>현재 스크롤 위치: {y}</div>;
}

export default ScrollTracker;