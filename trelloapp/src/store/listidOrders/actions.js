/**
 * 전체 리스트의 순서(ID 배열)를 설정합니다. (초기화 또는 드래그 앤 드롭 결과 동기화)
 * @param {string[]} payload - 리스트 UUID들로 구성된 배열
 */
export const setListidOrders = (payload) => ({
  type: '@listidOrders/set',
  payload
})

/**
 * 새로운 리스트 ID를 순서 목록의 맨 뒤에 추가합니다.
 * @param {string} payload - 추가할 리스트의 UUID
 */
export const addListidToOrders = (payload) => ({
  type: '@listidOrders/add',
  payload
})

/**
 * 순서 목록에서 특정 리스트 ID를 제거합니다.
 * @param {string} payload - 삭제할 리스트의 UUID
 */
export const removeListidFromOrders = (payload) => ({
  type: '@listidOrders/remove',
  payload
})