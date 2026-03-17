import { makeClassName } from './textUtil'

export const Title = ({ className: _className, numberOfLines, ...props }) => {
  const className = makeClassName(
    'font-bold text-5xl text-center whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export const Subtitle = ({ className: _className, numberOfLines, ...props }) => {
  const className = makeClassName(
    'font-semibold text-3xl text-center whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export const Summary = ({ className: _className, numberOfLines, ...props }) => {
  const className = makeClassName(
    'text-sm whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export const Paragraph = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    'font-normal text-base whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}
