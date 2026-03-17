import React from 'react';

const ChildButton = React.memo(({ onClick, label }) => {
  console.log(`🔄 ChildButton 렌더링: ${label}`);
  return (
    <button onClick={onClick} style={{ padding: '10px', marginTop: '10px' }}>
      {label}
    </button>
  );
});

export default ChildButton;
