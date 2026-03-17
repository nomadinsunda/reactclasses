/**
 * 새로운 카드 엔티티를 스토어에 추가합니다.
 * @param {Object} payload - 추가할 카드 객체 (uuid 포함)
 */
export const addCard = (payload) => ({
  type: '@cardEntities/add',
  payload
})

/**
 * 특정 UUID를 가진 카드를 스토어에서 제거합니다.
 * @param {string} payload - 삭제할 카드의 UUID
 */
export const removeCard = (payload) => ({
  type: '@cardEntities/remove',
  payload
})