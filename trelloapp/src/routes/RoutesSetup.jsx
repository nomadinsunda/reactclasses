import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import RequireAuth from './Auth/RequireAuth'
import LandingPage from './LandingPage'
import Board from '../pages/Board'
import Signup from './Auth/SignUp'
import Login from './Auth/Login'
import Logout from './Auth/Logout'
import NoMatch from './NoMatch'
import Card from './Card' // 예시 경로입니다. 실제 파일 위치에 맞게 수정하세요.

export default function RoutesSetup() {
  return (
    <Routes>
      {/* 1. 공통 레이아웃(Nav, Footer)이 적용되는 그룹 */}
      <Route path="/" element={<Layout />}>
        {/* 메인 랜딩 페이지 */}
        <Route index element={<LandingPage />} />
        
        {/* 인증이 필요한 보드 페이지 */}
        <Route 
          path="/board" 
          element={
            <RequireAuth>
              <Board />
            </RequireAuth>
          } 
        />

        <Route 
          path="/board/card/:cardid"
          element={
            <Card />
          } 
        />
        
        {/* 레이아웃 내부에서 발생하는 404 에러 처리 */}
        <Route path="*" element={<NoMatch />} />
      </Route>

      {/* 2. 독립된 화면으로 렌더링되는 인증 관련 페이지 */}
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      
      {/* 로그아웃도 인증된 사용자만 가능하도록 보호 */}
      <Route 
        path="logout"
        element={
          <RequireAuth>
            <Logout />
          </RequireAuth>
        }
      />

      

      {/* 3. 위 경로들 외의 모든 잘못된 접근 처리 */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}