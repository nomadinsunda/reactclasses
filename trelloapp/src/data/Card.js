import {makeRandomUser} from './User'
import * as C from './chance'
import * as I from './image'
import * as D from './date'

/**
 * @typedef {Object} ICard
 * @property {string} uuid - 카드의 고유 식별자
 * @property {Object} writer - 작성자 정보 (IUser)
 * @property {string} image - 카드 이미지 URL
 * @property {string} title - 카드 제목
 * @property {string} paragraphs - 카드 본문 내용
 * @property {string} dayMonthYearDate - 포맷팅된 날짜 (예: 2026-01-31)
 * @property {string | null} relativeDate - 상대적 시간 표현 (예: 3일 전)
 */

/**
 * 카드 객체를 생성하는 함수
 */
export const makeCard = (
  uuid,
  writer,
  image,
  title,
  paragraphs,
  dayMonthYearDate,
  relativeDate
) => ({
  uuid,
  writer,
  image,
  title,
  paragraphs,
  dayMonthYearDate,
  relativeDate
})

/**
 * 무작위 데이터를 채운 카드 객체를 생성하는 함수
 */
export const makeRandomCard = () => {
  const date = D.makeRandomPastDate()
  return makeCard(
    C.randomUUID(),
    makeRandomUser(),
    I.randomImage(800, 600),
    C.randomTitleText(),
    C.randomParagraphs(5),
    D.makeDayMonthYear(date),
    D.makeRelativeDate(date)
  )
}