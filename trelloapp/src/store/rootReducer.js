import {combineReducers} from 'redux'
import * as L from './listEntities'
import * as LO from './listidOrders'
import * as LC from './listidCardids' 
import * as C from './cardEntities'

/**
 * 애플리케이션의 모든 리듀서를 하나로 통합합니다.
 * 이를 통해 생성된 store는 아래와 같은 구조를 갖게 됩니다.
 * combineReducers는 Redux 라이브러리에서 제공하는 함수로, 
 * 여러 개의 분리된 리듀서(Reducer)들을 하나의 루트 리듀서(Root Reducer)로 합쳐주는 역할
 */
export const rootReducer = combineReducers({
  // 1. 리스트 데이터 본체 (객체)
  listEntities: L.reducer,
  
  // 2. 보드 위 리스트들의 전체 순서 (UUID 배열)
  listidOrders: LO.reducer,
  
  // 3. 리스트와 카드 간의 소속 및 순서 관계 (객체 내 UUID 배열)
  listidCardids: LC.reducer, 
  
  // 4. 카드 데이터 본체 (객체)
  cardEntities: C.reducer
})