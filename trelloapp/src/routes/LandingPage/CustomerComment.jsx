import React from 'react'
import {Div, Avatar} from '../../components'

/**
 * 고객의 프로필과 코멘트를 표시하는 카드 컴포넌트입니다.
 */
const CustomerComment = ({customerComment}) => {
  const {name, jobTitle, company, avatar, comment} = customerComment

  return (
    <Div
      className="relative p-2 mx-2 mt-8 border-2 rounded-lg shadow-lg border-primary"
      minWidth="20rem"
      width="20rem"
      minHeight="10rem"
      height="100"
    >
      {/* 아바타를 상단 테두리 중앙에 배치 (Floating Avatar) */}
      <div className="absolute flex items-center justify-center w-full -top-7 left-0">
        <Avatar src={avatar} className="border-2 border-primary" />
      </div>

      <div className="flex flex-col">
        {/* 고객 정보 영역 */}
        <div className="flex flex-col p-4 font-bold">
          <p className="text-lg">{name}</p>
          <p className="text-sm text-gray-600">{jobTitle}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>

        {/* 코멘트 본문 */}
        <p className="px-4 pb-4 italic text-gray-700">"{comment}"</p>
      </div>
    </Div>
  )
}

export default CustomerComment