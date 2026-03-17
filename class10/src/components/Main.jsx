import React from 'react';
import HeavyCalculation from './HeavyCalculation';
import SortedList from './SortedList';

function Main() {
  return (
    <main style={{ padding: '20px' }}>
      <HeavyCalculation />
      <hr style={{ margin: '40px 0' }} />
      <SortedList />
    </main>
  );
}

export default Main;
