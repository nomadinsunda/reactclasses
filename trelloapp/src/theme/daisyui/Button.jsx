import React from 'react'

/**
 * 공통 버튼 컴포넌트
 * @param {string} className - 추가적인 스타일 클래스 (Tailwind/DaisyUI)
 * @param {Object} props - button 태그에 전달될 기타 모든 속성 (onClick, type 등)
 */
export const Button = ({ className: _className, children, ...buttonProps }) => {
  // DaisyUI의 'btn' 클래스를 기본으로 하고, 
  // 외부에서 전달된 클래스를 합쳐서 유연한 스타일링을 지원합니다.
  const className = ['btn', _className].join(' ')
  
  return (
    <button {...buttonProps} className={className}>
      {children}
    </button>
  )
}