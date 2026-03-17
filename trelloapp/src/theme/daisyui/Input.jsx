import React, {forwardRef} from 'react'

/**
 * forwardRef를 사용한 공통 입력창 컴포넌트
 * ref를 통해 부모 컴포넌트에서 input 요소에 직접 접근(focus 등)이 가능합니다.
 */
export const Input = forwardRef((props, ref) => {
  const {className: _className, ...inputProps} = props
  
  // DaisyUI의 'input' 클래스를 기본으로 사용합니다.
  const className = ['input', _className].join(' ')
  
  return (
    <input 
      ref={ref} 
      {...inputProps} 
      className={className} 
    />
  )
})

// 컴포넌트 이름 설정 (디버깅 시 유용)
Input.displayName = 'Input'