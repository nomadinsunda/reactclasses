import React from 'react';
import CounterSection from './CounterSection';
import TimerComponent from './TimerComponent';
import ScrollTracker from './ScrollTracker';
import FancyScrollbar from './FancyScrollbar';

function Main() {
  return (
    <main style={{ padding: '20px' }}>
      <FancyScrollbar />
      <TimerComponent />
      <CounterSection />
      <ScrollTracker />
    </main>
  );
}

export default Main;
