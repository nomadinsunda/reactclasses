/**
 * listidCardids 도메인에서 사용하는 액션 타입 상수
 */
export const SET_LISTID_CARDIDS = '@listidCardids/set'
export const REMOVE_LISTID = '@listidCardids/remove'
export const PREPEND_CARDID = '@listidCardids/prependCardid'
export const APPEND_CARDID = '@listidCardids/appendCardid'
export const REMOVE_CARDID = '@listidCardids/removeCardid'

/**
 * State 구조 설명 (JSDoc)
 * @typedef {Object.<string, string[]>} State
 * 리스트의 UUID를 키(Key)로 하고, 해당 리스트에 속한 카드 UUID들의 배열을 값(Value)으로 가집니다.
 * 예: { "list-1": ["card-1", "card-2"], "list-2": [] }
 */

// 공통 타입 데이터 구조 재내보내기
export * from '../commonTypes'