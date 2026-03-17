import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Welcome from './components/Welcome';

const App = () => {
  const logEvent = (eventName, detail = '') => {
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${eventName} ${detail}`);
  };

  return (
    <div>
      <Welcome name="Good Morning" />
      <Header title="React 이벤트 테스트" subtitle="(INTHEEAST 제공)" />
      <Main logEvent={logEvent} />
      <Footer author="kris" />
    </div>
  );
};

export default App;
