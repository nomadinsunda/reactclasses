/* eslint-disable react-refresh/only-export-components */
import React, {createContext, useContext, useState, useCallback} from 'react'
import * as U from '../utils'

const AuthContext = createContext({
  loggedUser: undefined,
  signup: () => {},
  login: () => {},
  logout: () => {}
})

export const AuthProvider = ({children}) => {
  const [loggedUser, setLoggedUser] = useState(undefined)

  // 백엔드가 없으므로, 야메로 웹브라우저의 로컬 스토리지에 가입한 유저의 정보를 저장
  const signup = useCallback((email, password, callback) => {
    const user = {email, password}
    // email과 password를 사용하여 유저 상태를 업데이트합니다.
    setLoggedUser(user) 
    U.writeObjectP('user', user).finally(() => {
      if (callback) callback()
    })
  }, [])

  const login = useCallback((email, password, callback) => {
    // 받은 email과 password를 상태에 반영하여 '사용' 처리합니다.
    const user = {email, password}
    setLoggedUser(user) 
    
    if (callback) callback()
  }, [])

  const logout = useCallback((callback) => {
    setLoggedUser(undefined)
    if (callback) callback()
  }, [])

  const value = {
    loggedUser,
    signup,
    login,
    logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}