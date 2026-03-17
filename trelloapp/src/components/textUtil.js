// prettier-ignore
export const makeClassName = (setting, _className, numberOfLines) => {
  return [
    setting, 
    numberOfLines ? `line-clamp-${numberOfLines}` : '', 
    _className
  ].join(' ').trim();
}