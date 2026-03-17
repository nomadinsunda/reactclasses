import { Div } from './Div'

export const Avatar = ({
  className: _className, // props 객체에 className이라는 키가 있다면 그 값을 받아서 _className이라는 이름의 로컬 변수에 저장해라
  style,
  src,
  size,
  ...props
}) => {
  // rem = root em : 1rem = <html>의 font-size 값
  // 기본적으로 대부분의 브라우저에서 <html>의 기본 font-size는 16px 입니다.
  // 1rem = 16px
  // 2rem = 32px
  // 0.5rem = 8px
  // 3rem = 48px
  const w_or_h = size ?? '3rem' // size가 null 또는 undefined면 3rem
  // rounded-full bg-cover bg-gray-300 는 Tailwind CSS 유틸리티 클래스들의 조합
  // - 완전한 동그라미(rounded-full)
  // - 배경 이미지를 꽉 채우고(bg-cover)
  // - 기본적으로 연한 회색 배경을 가지며(bg-gray-300)
  // ['class1', 'class2'].join(' ')  // "class1 class2"
  const className = ['rounded-full bg-cover bg-gray-300', _className].join(' ')

  return (
    <Div
      {...props}
      src={src}
      width={w_or_h}
      height={w_or_h}
      className={className}
      style={style}
    />
  )
}