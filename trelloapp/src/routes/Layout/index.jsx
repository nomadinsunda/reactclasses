import React from 'react'
import {Outlet} from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

/**
 * 모든 페이지에서 공통으로 사용되는 레이아웃 컴포넌트입니다.
 * NavigationBar와 Footer 사이에 경로별 컴포넌트(Outlet)가 렌더링됩니다.
 */
export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      {/* 상단 고정 네비게이션 바 */}
      <NavigationBar />
      
      {/* 중앙 컨텐츠 영역: 
          경로에 따라 LandingPage, Board, Login 등이 이 자리에 표시됩니다. 
          flex-1을 주어 컨텐츠가 적어도 푸터가 바닥에 붙어있게 설정할 수 있습니다.
      */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* 하단 고정 푸터 */}
      <Footer />
    </div>
  )
}