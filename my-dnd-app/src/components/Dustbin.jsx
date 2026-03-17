import { useDrop } from 'react-dnd';

const Dustbin = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'BOX',
    // 드롭되었을 때 실행될 로직
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = '#222';
  if (isActive) backgroundColor = 'darkgreen';
  else if (canDrop) backgroundColor = 'darkkhaki';

  return (
    <div ref={drop} style={{ height: '200px', width: '200px', color: 'white', backgroundColor, padding: '1rem' }}>
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </div>
  );
};

export default Dustbin;