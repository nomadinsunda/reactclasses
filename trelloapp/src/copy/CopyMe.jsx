import React from 'react'
import {Title} from '../components' // barrel 파일(index.js)에서 가져오기
import {Div} from '../components'

export default function CopyMe() {
  return (
    <section className="mt-4">
      {/* 기존 h2를 우리가 만든 공통 Title 컴포넌트로 교체하여 일관성 유지 */}
      <Title>CopyMe</Title>
      
      {/* mt-4 여백을 위해 빈 div 대신 공통 Div 컴포넌트 활용 */}
      <Div className="mt-4" />
      
      {/* 여기에 앞으로 구현할 기능(예: 카드 리스트 등)이 들어갑니다. */}
    </section>
  )
}