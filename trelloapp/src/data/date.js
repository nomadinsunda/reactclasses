import {DateTime} from 'luxon'

/**
 * 무작위 과거 날짜를 생성합니다.
 */
export const makeRandomPastDate = () => {
  const value = new Date().valueOf()
  const n = 100000
  // 현재 시점에서 임의의 과거 시간을 뺀 날짜 반환
  return new Date(value - Math.floor(Math.random() * n * n))
}

/**
 * JS Date 객체를 "3일 전", "지난달" 같은 상대적 문자열로 변환합니다.
 */
export const makeRelativeDate = (date) =>
  DateTime.fromJSDate(date).startOf('day').toRelative()

/**
 * 무작위 과거 날짜에 대한 상대적 날짜 문자열을 반환합니다.
 */
export const randomRelativeDate = () => makeRelativeDate(makeRandomPastDate())

/**
 * JS Date 객체를 "2026년 1월 31일" 같은 지역화된 긴 형식으로 변환합니다.
 */
export const makeDayMonthYear = (date) =>
  DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL)

/**
 * 무작위 과거 날짜에 대한 "년-월-일" 형식의 문자열을 반환합니다.
 */
export const randomDayMonthYear = () => makeDayMonthYear(makeRandomPastDate())