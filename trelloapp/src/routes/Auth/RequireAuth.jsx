import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'

/**
 * 인증이 필요한 페이지를 보호하는 래퍼 컴포넌트입니다.
 * 로그인 정보가 없으면 이전 페이지로 되돌려보냅니다.
 */
const RequireAuth = ({children}) => {
  const {loggedUser} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // 로그인한 사용자 정보가 없으면 이전 페이지(-1)로 이동시킵니다.
    if (!loggedUser) {
      navigate(-1)
    }
  }, [loggedUser, navigate])

  // 로그인 상태라면 자식 컴포넌트(children)를 정상적으로 렌더링합니다.
  return <>{children}</>
}

export default RequireAuth