import React from 'react'
import Hero from './Hero'
import Promotion from './Promotion'

/**
 * 서비스의 메인 랜딩 페이지입니다.
 * 상단 Hero 섹션과 홍보(Promotion) 섹션으로 구성됩니다.
 */
export default function LandingPage() {
  return (
    <section className="mt-4">
      {/* 주요 환영 문구와 이동 버튼이 있는 섹션 */}
      <Hero />
      
      {/* 서비스의 특징이나 특별한 혜택을 보여주는 섹션 */}
      <Promotion />
    </section>
  )
}