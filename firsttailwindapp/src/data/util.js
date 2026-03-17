export const makeArray = (length) => new Array(length).fill(null)

export const range = (min, max) =>
  makeArray(max - min).map((_, index) => index + min)

export const random = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min
