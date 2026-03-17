import * as T from './types'

// 초기 상태는 빈 객체입니다. 
// 리스트 정보를 { [uuid]: listObject } 형태로 저장합니다.
const initialState = {}

/**
 * 리스트 엔티티 리듀서
 * 리스트의 메타데이터(제목, 포함된 카드 ID 목록 등)를 관리합니다.
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 새로운 리스트를 추가하거나 기존 정보를 업데이트합니다.
    case '@listEntities/add':
      return {
        ...state, 
        [action.payload.uuid]: action.payload
      }

    // 특정 UUID를 가진 리스트를 엔티티 저장소에서 제거합니다.
    case '@listEntities/remove': {
      const newState = {...state}
      delete newState[action.payload] // payload로 전달된 UUID를 키로 사용하여 삭제
      return newState
    }

    default:
      return state
  }
}