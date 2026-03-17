import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useCallback
} from 'react'
import { AppContext } from './AppContext'

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_BORDER':
      return { ...state, showBorder: !state.showBorder }
    default:
      return state
  }
}

const initialState = {
  showBorder: true
}

export function AppProvider({ children }) {
  const [username, setUsername] = useState('Guest')
  const [state, dispatch] = useReducer(reducer, initialState)
  const inputRef = useRef()

  useEffect(() => {
    console.log('AppProvider mounted')
  }, [])

  const login = useCallback((name) => {
    setUsername(name)
  }, [])

  return (
    <AppContext.Provider value={{ username, login, state, dispatch, inputRef }}>
      {children}
    </AppContext.Provider>
  )
}