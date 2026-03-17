import { useDrag } from 'react-dnd';

const Box = ({ name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'BOX', // DropTarget의 accept와 일치해야 함
    item: { name },
    // collect 함수를 통해 현재 드래그 상태를 props로 가져옴
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.4 : 1,
        cursor: 'move',
        padding: '1rem',
        border: '1px dashed gray',
        backgroundColor: 'white',
      }}
    >
      {name}
    </div>
  );
};

export default Box;