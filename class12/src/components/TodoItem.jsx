function TodoItem({ todo, dispatch }) {
  const { id, text, done } = todo

  const spanEventHandler = () => {
    dispatch({ type: 'TOGGLE', id })
  }

  const buttonEventHandler = () => { 
    dispatch({ type: 'REMOVE', id })
  }

  return (
    <li style={{ marginTop: '10px' }}>
      <span
        onClick={spanEventHandler}
        style={{
          textDecoration: done ? 'line-through' : 'none',
          cursor: 'pointer',
          marginRight: '10px',
        }}
      >
        {text}
      </span>
      <button onClick={buttonEventHandler}>삭제</button>
    </li>
  )
}

export default TodoItem
