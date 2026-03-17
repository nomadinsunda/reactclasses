import React, { useContext } from 'react'
import { AppContext } from './AppContext'

function Sidebar() {
  const { state } = useContext(AppContext)

  return (
    <aside style={{ background: '#f0f0f0', padding: '10px' }}>
      <h4>📂 Tasks Preview</h4>
      <ul>
        {state.tasks.slice(0, 3).map(task => (
          <li key={task.id}>
            {task.text} {task.done ? '✅' : ''}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar