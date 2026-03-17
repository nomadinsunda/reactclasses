import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

const App = () => {
  /*
  props는 읽기 전용(read-only)임.
  하지만 아래 코드는 props를 수정하는 게 아니라 "상태(state)를 갱신하는 함수(setter)를 props로 전달하고 있기 때문에 
  문제 없이 자식 컴포넌트(Main)가 부모(App)의 state를 변경할 수 있음.
  */
 // props drilling!
  const [username, setUsername] = useState('홍길동');
  const [age, setAge] = useState(20);
  const [email, setEmail] = useState('');
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const appStyle = {
    backgroundColor: darkMode ? '#222' : '#fff',
    color: darkMode ? '#eee' : '#000',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={appStyle}>
      <Welcome name="hello" />
      <Header
        title="React State 관리 마스터 예제"
        subtitle="여러 state와 컴포넌트로 확장"
      />
      <Main
        username={username}
        setUsername={setUsername}
        age={age}
        setAge={setAge}
        email={email}
        setEmail={setEmail}
        count={count}
        setCount={setCount}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Footer author="React 마스터" />
    </div>
  );
};

export default App;
