import React from 'react'
import * as D from '../../data'

/**
 * 웹사이트 하단의 저작권 정보 및 회사명을 표시하는 푸터 컴포넌트입니다.
 */
export default function Footer() {
  // 현재 연도를 동적으로 가져오거나, 강의 자료와 맞춰 고정할 수 있습니다.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 footer footer-center bg-primary text-primary-content">
      <div>
        <p>
          Copyright © {currentYear} - All rights reserved by {D.randomCompanyName()}
        </p>
      </div>
    </footer>
  )
}