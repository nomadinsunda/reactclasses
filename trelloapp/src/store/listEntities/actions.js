/**
 * 새로운 리스트 엔티티를 추가합니다.
 * @param {Object} payload - 리스트 객체 (uuid, title, cardIds 등 포함)
 */
export const addList = (payload) => ({
  type: '@listEntities/add',
  payload
})

/**
 * 특정 UUID를 가진 리스트를 삭제합니다.
 * @param {string} payload - 삭제할 리스트의 UUID
 */
export const removeList = (payload) => ({
  type: '@listEntities/remove',
  payload
})