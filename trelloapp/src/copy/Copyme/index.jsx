import React from 'react'
import {Title} from '../components/TextComponents' // 경로 확인 필요
import {Div} from '../components/Div'

export default function CopyMe() {
  return (
    <section className="mt-4">
      {/* 기존 h2를 우리가 만든 Title 컴포넌트로 교체 */}
      <Title>CopyMe</Title>
      
      {/* 공통 Div 컴포넌트를 활용한 여백 설정 */}
      <Div className="mt-4" />
    </section>
  )
}