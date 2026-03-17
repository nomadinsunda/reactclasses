/**
 * 특정 길이의 빈 배열을 생성합니다.
 * @param {number} length - 생성할 배열의 길이
 */
export const makeArray = (length) => new Array(length).fill(null);

/**
 * 특정 범위의 숫자 배열을 생성합니다. (예: range(1, 5) -> [1, 2, 3, 4])
 * @param {number} min - 시작 숫자
 * @param {number} max - 끝 숫자 (포함되지 않음)
 */
export const range = (min, max) =>
  makeArray(max - min).map((_, index) => index + min);

/**
 * 지정된 범위 내에서 무작위 정수를 생성합니다.
 * @param {number} min - 최소값
 * @param {number} max - 최대값 (포함되지 않음)
 */
export const random = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;