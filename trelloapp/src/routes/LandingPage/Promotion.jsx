import React, {useMemo} from 'react'
import CustomerComment from './CustomerComment'
import {Div} from '../../components'
import * as D from '../../data'

/**
 * 고객들의 리뷰와 광고 배너를 보여주는 홍보 섹션입니다.
 */
export default function Promotion() {
  // 1. 초기 렌더링 시 무작위 고객 리뷰 데이터 3개를 생성합니다.
  const comments = useMemo(() => D.makeArray(3).map(D.makeRandomCustomerComment), [])

  // 2. 생성된 데이터를 기반으로 CustomerComment 컴포넌트 배열을 만듭니다.
  const children = useMemo(
    () =>
      comments.map(comment => (
        <CustomerComment key={comment.uuid} customerComment={comment} />
      )),
    [comments]
  )

  return (
    <section className="w-full mt-4">
      <h2 className="ml-4 text-5xl font-bold">What our customers say:</h2>
      
      <div className="flex justify-between w-full p-4">
        {/* 왼쪽 배너 영역 */}
        <Div
          width="15%"
          minWidth="15%"
          className="flex items-center justify-center p-2 text-center text-white rounded-lg bg-primary">
          Your message here
        </Div>

        {/* 중앙 리뷰 카드 목록 영역 */}
        <div className="flex flex-wrap justify-center flex-1 p-4 mt-4">
          {children}
        </div>

        {/* 오른쪽 배너 영역 */}
        <Div
          width="15%"
          minWidth="15%"
          className="flex items-center justify-center p-2 text-center text-white rounded-lg bg-primary">
          Your advertisement here
        </Div>
      </div>
    </section>
  )
}