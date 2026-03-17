import {combineReducers} from 'redux'
import * as L from './listEntities'
import * as LO from './listidOrders'
import * as LC from './listidCardids' 
import * as C from './cardEntities'

/**
 * AppState 구조 (JSDoc으로 구조 명시)
 * @typedef {Object} AppState
 * @property {L.State} listEntities - 리스트 데이터 본체
 * @property {LO.State} listidOrders - 보드 내 리스트 배치 순서 (UUID 배열)
 * @property {LC.State} listidCardids - 리스트별 포함된 카드 ID 목록
 * @property {C.State} cardEntities - 카드 데이터 본체
 */

// 각 도메인의 리듀서들을 하나로 통합합니다.
export const rootReducer = combineReducers({
  listEntities: L.reducer,
  listidOrders: LO.reducer,
  listidCardids: LC.reducer,
  cardEntities: C.reducer
})