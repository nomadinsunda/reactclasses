import React, { useContext } from 'react'
import { AppContext } from './AppContext'

function TaskList() {
  const { state, dispatch } = useContext(AppContext)

  return (
    <div style={{ padding: '10px' }}>
      <h3>📝 Task List</h3>
      <ul>
        {state.tasks.map(task => (
          <li key={task.id}>
            <label style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
              />
              {task.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
