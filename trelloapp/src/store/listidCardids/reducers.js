import * as T from './types'

// 초기 상태는 빈 객체입니다. { [listId]: [cardId, cardId, ...] }
const initialState = {}

/**
 * 리스트 ID를 키로 하여 해당 리스트에 속한 카드 ID 배열을 관리하는 리듀서입니다.
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 1. 특정 리스트의 전체 카드 ID 목록을 설정 (초기화 또는 동기화)
    case '@listidCardids/set':
      return {...state, [action.payload.listid]: action.payload.cardids}

    // 2. 리스트 자체를 관계도에서 삭제
    case '@listidCardids/remove': {
      const newState = {...state}
      delete newState[action.payload]
      return newState
    }

    // 3. 특정 리스트의 맨 앞에 카드 추가 (Prepend)
    case '@listidCardids/prependCardid': {
      const cardids = state[action.payload.listid] || []
      return {
        ...state, 
        [action.payload.listid]: [action.payload.cardid, ...cardids]
      }
    }

    // 4. 특정 리스트의 맨 뒤에 카드 추가 (Append)
    case '@listidCardids/appendCardid': {
      const cardids = state[action.payload.listid] || []
      return {
        ...state, 
        [action.payload.listid]: [...cardids, action.payload.cardid]
      }
    }

    // 5. 특정 리스트에서 특정 카드 ID만 제거
    case '@listidCardids/removeCardid': {
      const cardids = state[action.payload.listid] || []
      return {
        ...state,
        [action.payload.listid]: cardids.filter(id => id !== action.payload.cardid)
      }
    }

    default:
      return state
  }
}