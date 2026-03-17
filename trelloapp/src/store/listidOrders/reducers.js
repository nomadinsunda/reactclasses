import * as T from './types'

// 초기 상태는 리스트 UUID들이 담길 빈 배열입니다.
const initialState = []

/**
 * 보드 내 리스트들의 표시 순서를 관리하는 리듀서입니다.
 * 상태값 예시: ['list-1-uuid', 'list-2-uuid', ...]
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 1. 전체 순서를 새롭게 설정 (데이터 로딩 또는 드래그 앤 드롭 결과 반영)
    case '@listidOrders/set':
      return action.payload

    // 2. 새로운 리스트 ID를 목록의 맨 뒤에 추가
    case '@listidOrders/add':
      return [...state, action.payload]

    // 3. 목록에서 특정 리스트 ID를 제거
    case '@listidOrders/remove':
      return state.filter(uuid => uuid !== action.payload)

    default:
      return state
  }
}