import React, { useContext, useState, useCallback } from 'react'
import { AppContext } from './AppContext'

function TaskForm() {
  const { dispatch } = useContext(AppContext)
  const [text, setText] = useState('')

  const addTask = useCallback(() => {
    if (!text.trim()) return
    dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), text, done: false } })
    setText('')
  }, [text, dispatch])

  return (
    <div style={{ padding: '10px' }}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTask}>➕ Add Task</button>
    </div>
  )
}

export default TaskForm
