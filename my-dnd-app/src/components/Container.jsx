import Box from './Box';
import Dustbin from './Dustbin';

const Container = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* 드롭될 영역 (수신기) */}
      <div style={{ marginBottom: '30px' }}>
        <Dustbin />
      </div>

      {/* 드래그할 아이템들 (발신기) */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <Box name="Glass" />
        <Box name="Banana" />
        <Box name="Paper" />
      </div>
    </div>
  );
};

export default Container;