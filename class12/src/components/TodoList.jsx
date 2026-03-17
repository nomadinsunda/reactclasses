import TodoItem from './TodoItem'

function TodoList({ todos, dispatch }) {
  if (todos.length === 0) 
    return <p style={{ marginTop: '20px' }}>할 일이 없습니다.</p>

  return (
    <ul style={{ marginTop: '20px' }}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  )
}

export default TodoList
