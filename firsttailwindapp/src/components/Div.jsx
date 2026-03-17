export const Div = ({
  width,
  height,
  style: _style,
  src,
  className: _className,
  left,
  right,
  top,
  bottom,
  ...props
}) => {
  const style = {
    ..._style,
    width,
    height,
    // src 값이 존재하면 backgroundImage: "url(src))"을 넣고, src 값이 없으면 backgroundImage를 undefined로 처리
    backgroundImage: src && `url(${src})`,
    left,
    right,
    top,
    bottom,
  }
  // Tailwind CSS가 제공하는 박스 모델(Box Sizing) 유틸리티 클래스
  const className = ['box-content', src && 'bg-gray-300', _className].join(' ')

  // 👉 className = “CSS 파일이나 Tailwind 같은 '정해진 스타일 규칙'을 적용"
  // 👉 style = “JS로 계산해야 하는 '즉석 값(동적 값)'을 적용"
  return <div {...props} className={className} style={style} />
}