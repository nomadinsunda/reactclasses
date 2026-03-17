// 초기 상태는 빈 객체입니다.
const initialState = {}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 새로운 카드를 추가하거나 기존 카드를 덮어씁니다.
    case '@cardEntities/add':
      return {
        ...state, 
        [action.payload.uuid]: action.payload
      }

    // 특정 UUID를 가진 카드를 객체에서 제거합니다.
    case '@cardEntities/remove': {
      const newState = {...state}
      delete newState[action.payload] // payload로 전달된 UUID 키를 삭제
      return newState
    }

    default:
      return state
  }
}