import React from 'react'
import { Div } from '../../components'
import { Icon } from './Icon'

/**
 * 모달의 최상위 컨테이너
 * @param {boolean} open - 모달의 표시 여부
 */
export const Modal = ({ open, className: _className, ...props }) => {
  const className = ['modal', open ? 'modal-open' : '', _className].join(' ')
  return <div {...props} className={className} />
}

/**
 * 모달의 내부 콘텐츠 영역
 * @param {function} onCloseIconClicked - 닫기 아이콘 클릭 시 함수 (없으면 아이콘 숨김)
 */
export const ModalContent = ({
  onCloseIconClicked,
  closeIconClassName: _closeIconClassName,
  className: _className,
  children,
  ...props
}) => {
  const showCloseIcon = !!onCloseIconClicked
  const className = ['modal-box', showCloseIcon ? 'relative' : '', _className].join(' ')

  if (!showCloseIcon) {
    return <div {...props} className={className}>{children}</div>
  }

  const closeIconClassName = _closeIconClassName ?? 'btn-primary btn-outline btn-sm'
  
  return (
    <div {...props} className={className}>
      <Div className="absolute" right="0.5rem" top="0.5rem">
        <Icon name="close" className={closeIconClassName} onClick={onCloseIconClicked} />
      </Div>
      {children}
    </div>
  )
}

/**
 * 모달 하단의 버튼 액션 영역
 */
export const ModalAction = ({ className: _className, ...props }) => {
  const className = ['modal-action', _className].join(' ')
  return <div {...props} className={className} />
}