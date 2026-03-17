import React from 'react'
import {Button} from './Button'
import {Icon as CIcon} from '../../components'

/**
 * 아이콘 전용 원형 버튼 컴포넌트
 * @param {string} name - 표시할 아이콘 이름
 * @param {string} iconClassName - 아이콘에 적용할 추가 스타일
 * @param {string} className - 버튼(원형)에 적용할 추가 스타일
 * @param {Object} buttonProps - Button 컴포넌트로 전달될 기타 속성
 */
export const Icon = ({name, iconClassName, className, ...buttonProps}) => {
  // DaisyUI의 'btn-circle'을 기본으로 하여 동그란 버튼 모양을 만듭니다.
  const btnClassName = ['btn-circle', className].join(' ')
  
  return (
    <Button {...buttonProps} className={btnClassName}>
      <CIcon className={iconClassName} name={name} />
    </Button>
  )
}