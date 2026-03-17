/**
 * 전체 리스트-카드 ID 관계를 설정합니다. (초기화용)
 * @param {Object} payload - { [listId]: [cardId, cardId, ...] } 형태의 객체
 */
export const setListidCardids = (payload) => ({
  type: '@listidCardids/set',
  payload
})

/**
 * 특정 리스트의 ID 관계 데이터를 제거합니다.
 * @param {string} payload - 삭제할 리스트의 UUID
 */
export const removeListid = (payload) => ({
  type: '@listidCardids/remove',
  payload
})

/**
 * 특정 리스트의 맨 앞에 새로운 카드 ID를 추가합니다.
 * @param {Object} payload - { listid, cardid }
 */
export const prependCardidToListid = (payload) => ({
  type: '@listidCardids/prependCardid',
  payload
})

/**
 * 특정 리스트의 맨 뒤에 새로운 카드 ID를 추가합니다.
 * @param {Object} payload - { listid, cardid }
 */
export const appendCardidToListid = (payload) => ({
  type: '@listidCardids/appendCardid',
  payload
})

/**
 * 특정 리스트에서 특정 카드 ID를 제거합니다.
 * @param {Object} payload - { listid, cardid }
 */
export const removeCardidFormListid = (payload) => ({
  type: '@listidCardids/removeCardid',
  payload
})