function TodoControls({ dispatch }) {

  const eventHandler = () =>  {
    dispatch({ type: 'CLEAR' });
  };
  
  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={eventHandler}>전체 삭제</button>
    </div>
  )
}

export default TodoControls
