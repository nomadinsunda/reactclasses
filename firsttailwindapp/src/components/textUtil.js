// prettier-ignore
export const makeClassName = (setting, _className, numberOfLines) =>
  [setting, numberOfLines ? `line-clamp-${numberOfLines}` : '', _className].join(' ')
