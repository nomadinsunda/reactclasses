import * as T from './types'

// 초기 상태는 빈 객체(또는 도메인에 맞는 초기값)로 설정합니다.
const initialState = {}

/**
 * 도메인의 상태를 변경하는 리듀서 함수입니다.
 * @param {Object} state - 현재 상태
 * @param {Object} action - 수행할 액션 (type, payload 포함)
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 여기에 T.ADD_LIST와 같은 액션 처리 로직이 추가됩니다.
    // case T.SOME_ACTION:
    //   return { ...state, ...action.payload }

    default:
      return state
  }
}