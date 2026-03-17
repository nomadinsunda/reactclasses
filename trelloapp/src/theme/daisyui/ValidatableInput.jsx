import React, {forwardRef, useImperativeHandle, useMemo, useRef} from 'react'

/**
 * 자체 검증(Validation) 기능을 가진 입력창 컴포넌트
 * useImperativeHandle을 통해 부모 컴포넌트에서 ref.current.validate() 호출이 가능합니다.
 */
export const ValidatableInput = forwardRef(
  ({type, className: _className, ...inputProps}, methodRef) => {
    
    // 스타일 최적화: 클래스명이 바뀔 때만 다시 계산합니다.
    const className = useMemo(() => ['input', _className].join(' '), [_className])
    const inputRef = useRef(null)

    // 부모에게 노출할 메서드를 정의합니다.
    useImperativeHandle(
      methodRef,
      () => ({
        validate: () => {
          const value = inputRef.current?.value
          
          // 1. 공통 필수 입력 체크
          if (!value || !value.trim().length) {
            return [false, '사용자가 입력한 내용이 없습니다.']
          }

          // 2. 타입별 정규식 체크
          switch (type) {
            case 'email': {
              const regEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
              const valid = regEx.test(value)
              return valid ? [true, value] : [false, '틀린 이메일 주소 입니다.']
            }
            default:
              // 이메일 외의 일반 텍스트는 빈 값이 아니면 통과로 처리할 수 있습니다.
              return [true, value]
          }
        }
      }),
      [type]
    )

    return <input {...inputProps} type={type} className={className} ref={inputRef} />
  }
)

ValidatableInput.displayName = 'ValidatableInput'