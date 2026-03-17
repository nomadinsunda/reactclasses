import React from 'react'

export const Div = ({
  // 커스텀 속성들 (DOM에 전달되지 않도록 따로 추출)
  width, height, 
  style: _style, 
  src, 
  className: _className, 
  left, right, top, bottom,
  minWidth, maxWidth, minHeight, maxHeight,
  // 나머지 표준 HTML 속성들 (onClick, onMouseEnter 등)
  ...props 
}) => {
  
  // 1. 인라인 스타일 객체 구성
  const style = {
    ..._style, 
    width, height, 
    backgroundImage: src ? `url(${src})` : undefined,
    // 이미지가 영역을 꽉 채우도록 기본값 추가 (안 하면 이미지가 잘리거나 반복됨)
    backgroundSize: src ? 'cover' : undefined,
    backgroundPosition: src ? 'center' : undefined,
    left, right, top, bottom,
    minWidth, maxWidth, minHeight, maxHeight
  }

  // 2. Tailwind CSS 클래스 결합
  const className = [
    'box-border', 
    src ? 'bg-no-repeat' : '', // 이미지 반복 방지 클래스 추가
    _className
  ].join(' ').trim()

  // 3. 커스텀 속성을 제외한 props만 div에 전달하여 에러 방지
  return <div {...props} className={className} style={style} />
}