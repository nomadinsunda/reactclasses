import React from 'react'
import {Link as RRLink} from 'react-router-dom'
import {Link} from '../../components'
import {useAuth} from '../../contexts'

/**
 * 상단 네비게이션 바 컴포넌트입니다.
 * 로그인 여부(loggedUser)에 따라 Board 메뉴와 Login/Logout 버튼을 전환합니다.
 */
export default function NavigationBar() {
  const {loggedUser} = useAuth()

  return (
    // btn, btn-link, btn-active는 daisyUI에서 제공하는 클래스.
    <div className="flex justify-between shadow-xs bg-base-100">
      {/* 왼쪽 메뉴 영역: Home, Board */}
      <div className="flex p-2 navBar">
        <Link to="/" className="btn btn-link">Home</Link>
        {/* 로그인한 사용자에게만 Board 메뉴 노출 */}
        {loggedUser && (
          <Link to="/board" className="ml-4 btn btn-link">Board</Link>
        )}
      </div>

      {/* 오른쪽 메뉴 영역: Login, Signup / Logout */}
      <div className="flex items-center p-2">
        {!loggedUser && (
          <>
            <RRLink to="/login" className="btn btn-sm btn-primary">
              Login
            </RRLink>
            <RRLink to="/signup" className="ml-4 btn btn-sm btn-outline btn-primary">
              Signup
            </RRLink>
          </>
        )}

        {/* 로그인한 사용자에게는 LOGOUT 링크 노출 */}
        {loggedUser && (
          <RRLink to="/logout" className="ml-4 mr-4 font-bold text-error">
            LOGOUT
          </RRLink>
        )}
      </div>
    </div>
  )
}