import React, { useContext, useMemo } from 'react'
import { AppContext } from './AppContext'

function Main() {
  const { state, dispatch } = useContext(AppContext)

  const totalTasks = useMemo(() => state.tasks.length, 
                                [state.tasks])

  return (
    <main style={{ padding: '20px' }}>
      <h2>📊 Counter: {state.count}</h2>
      <p>Total Tasks: {totalTasks}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </main>
  )
}

export default Main
