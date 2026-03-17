import React from 'react'

// prettier-ignore
export const Icon = ({name, className: _className, ...props}) => {
  const className = ['material-icons', _className].join(' ')
  return (
    <span {...props} className={className}>
      {name}
    </span>
  )
}