import React from 'react'
import {useResolvedPath, useMatch, Link as RRLink} from 'react-router-dom'

export const Link = ({className: _className, to, ...props}) => {
  // 현재 입력된 'to' 경로를 절대 경로 객체로 변환합니다.
  const resolved = useResolvedPath(to)
  
  // 현재 브라우저의 경로와 'to' 경로가 정확히 일치하는지 확인합니다. (end: true)
  const match = useMatch({path: resolved.pathname, end: true})

  // 경로가 일치하면 DaisyUI나 사용자 정의 스타일인 'btn-active' 클래스를 추가합니다.
  const className = [_className, match ? 'btn-active' : ''].join(' ')

  return <RRLink {...props} to={to} className={className} />
}