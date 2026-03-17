import React, { 
  useState,
  useEffect,
  useReducer,
  useRef,
  useCallback
} from 'react'

import { AppContext } from './AppContext' // default export가 아니므로 중괄호 {}를 사용해야 함

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] }
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
            task.id === action.payload?
            { ...task, done: !task.done }
            : task
        )
      }
    default:
      return state
  }
}

const initialState = {
  count: 0,
  tasks: []
}

function AppProvider({ children }) {
  const [user, setUser] = useState('Guest')
  const [state, dispatch] = useReducer(reducer, initialState)
  const inputRef = useRef()

  useEffect(() => {
    console.log('AppProvider mounted')
  }, [])

  const login = useCallback((name) => {
    setUser(name)
  }, [])

  return (
    <AppContext.Provider value={{ user, login, state, dispatch, inputRef }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
