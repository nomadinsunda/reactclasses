import * as U from './util'

/**
 * 특정 크기의 Picsum 이미지 URL을 생성합니다.
 */
export const picsumUrl = (width, height) =>
  `https://picsum.photos/${width}/${height}`

/**
 * 지정된 범위 내에서 무작위 크기의 이미지 URL을 생성합니다.
 * @param {number} w - 기본 너비 (기본값: 1000)
 * @param {number} h - 기본 높이 (기본값: 800)
 * @param {number} delta - 무작위 범위를 위한 편차 (기본값: 200)
 */
export const randomImage = (
  w = 1000,
  h = 800,
  delta = 200
) => picsumUrl(U.random(w, w + delta), U.random(h, h + delta))

/**
 * 200~400px 사이의 무작위 크기를 가진 정사각형 아바타 이미지 URL을 생성합니다.
 */
export const randomAvatar = () => {
  const size = U.random(200, 400)
  return picsumUrl(size, size)
}