import React, { useState, useMemo } from 'react';

function SortedList() {
  // [2, 3, 1, 7]
  const [list, setList] = useState(['React', 'Vue', 'Angular', 'Svelte']);
  const [order, setOrder] = useState('asc');

  // const x = list.sort((a, b) => 
  //     order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
  //   );

  // const h = [...list];
  // h.sort((a, b) => 
  //     order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
  //   );

  const sortedList = useMemo(() => {
    console.log('🔄 리스트 정렬 실행');
    return [...list].sort((a, b) => 
      order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
    );
  }, [list, order]);

  const addItem = () => {
    const newItem = prompt('추가할 프레임워크를 입력하세요');
    if (newItem) setList([...list, newItem]);
  };

  return (
    <section>
      <h2>📋 useMemo로 리스트 정렬 최적화</h2>
      <button onClick={addItem}>프레임워크 추가</button>
      <button onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}>
        정렬 순서: {order === 'asc' ? '오름차순' : '내림차순'}
      </button>
      <ul style={{ marginTop: '10px' }}>
        {sortedList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default SortedList;
