import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as LO from '../store/listidOrders'
import * as L from '../store/listEntities'
import * as C from '../store/cardEntities'
import * as LC from '../store/listidCardids' 
import * as U from '../utils'

/**
 * 보드 전체의 리스트와 드래그 앤 드롭 로직을 관리하는 훅
 */
export const useLists = () => {

  const dispatch = useDispatch()

// 1. 데이터 조립 (리스트 엔티티 + 순서)
//
// 주의사항: useSelector는 store가 관리하고 있는
// "전체 Redux state"를 하나의 자바스크립트 객체로 전달한다.
//
// 이때 전달되는 state 객체의 구조는
// combineReducers에게 전달한 객체의 "키 이름"에 의해 결정된다.
//
// 즉, combineReducers의 각 key가
// 최종 Redux state의 최상위 프로퍼티 이름이 된다.

/*
export const rootReducer = combineReducers({
  // ↓ 이 객체의 "키 이름"들이
  // ↓ Redux store state의 최상위 구조를 그대로 정의한다

  // 1. 리스트 데이터 본체 (객체)
  listEntities: L.reducer,

  // 2. 보드 위 리스트들의 전체 순서 (UUID 배열)
  listidOrders: LO.reducer,

  // 3. 리스트와 카드 간의 소속 및 순서 관계 (객체 내 UUID 배열)
  listidCardids: LC.reducer,

  // 4. 카드 데이터 본체 (객체)
  cardEntities: C.reducer
})
*/

/*
따라서 useSelector의 콜백 함수에 전달되는 state는
아래와 같은 구조를 갖는다.

state = {
  listEntities: {...},
  listidOrders: [...],
  listidCardids: {...},
  cardEntities: {...}
}

이 때문에
state.listEntities,
state.listidOrders 와 같이 접근할 수 있으며,

객체 구조 분해 할당을 사용할 경우에도
반드시 combineReducers에 정의한 "키 이름"과
정확히 일치해야 한다.
*/

// 아래 구조 분해 할당은
// state.listidOrders, state.listEntities 를 꺼내는 것과 동일하다.
// useSelector의 콜백이 호출될 때, Redux에 등록-combineReducers 함수에게 전달된 자바스크립트 객체-된 
// 자바스크립트 객체가 아규먼트로 전달되고,
// 아래 코드는 다음과 같이 콜백 함수의 파라미터 정의를 객체 구조 분해 할당을 하고 있음.
// 이 때 객체 구조 분해 할당의 요소는 이 객체의 키! 그래서 이 키의 값이 전달되는 것
// listidOrders는 사실 LC.reducer가 리턴한 값임
  const lists = useSelector(({ listidOrders, listEntities }) =>
    listidOrders.map(uuid => listEntities[uuid])
  )

  // 분명 reducer는 dispatch가 호출해야 하는데,
  // 직접 호출하고 있음...listidOrders.map(...) 위 코드에서 다음과 같이 직접 호출한 결과임
  // LO.reducer(undefined, { type: 'INIT' }).map(...)
  // 1st para : undefined
  // 2nd para : { type: 'INIT' }

  
  const listidCardids = useSelector(({listidCardids}) => listidCardids)
  const listidOrders = useSelector(({listidOrders}) => listidOrders)

  // 2. 리스트 생성: 순서, 엔티티, 관계(빈 배열)를 동시에 생성
  const onCreateList = useCallback(
    (uuid, title) => {
      const list = {uuid, title}
      dispatch(LO.addListidToOrders(uuid))
      dispatch(L.addList(list))
      dispatch(LC.setListidCardids({listid: uuid, cardids: []}))
    },
    [dispatch]
  )

  // 3. 리스트 삭제: 하위 카드들까지 모두 찾아 지우는 Cascading Delete 구현
  const onRemoveList = useCallback(
    (listid) => () => {
      // 리스트에 속한 모든 카드 엔티티 먼저 제거
      listidCardids[listid]?.forEach(cardid => {
        dispatch(C.removeCard(cardid))
      })
      dispatch(LC.removeListid(listid))
      dispatch(L.removeList(listid))
      dispatch(LO.removeListidFromOrders(listid))
    },
    [dispatch, listidCardids]
  )

  // 4. 리스트 순서 변경 (Swap)
  const onMoveList = useCallback(
    (dragIndex, hoverIndex) => {
      const newOrders = listidOrders.map((item, index) =>
        index === dragIndex ? listidOrders[hoverIndex] :
        index === hoverIndex ? listidOrders[dragIndex] : item
      )
      dispatch(LO.setListidOrders(newOrders))
    },
    [dispatch, listidOrders]
  )

  // 5. 드래그 앤 드롭 핵심 로직 (카드 이동)
  const onDragEnd = useCallback(
    (result) => {
      const { source, destination, draggableId } = result;
      if (!destination) return;

      const sourceListid = source.droppableId;
      const destinationListid = destination.droppableId;
      const sourceCardIndex = source.index;
      const destinationCardIndex = destination.index;

      // 케이스 A: 같은 리스트 내에서 순서만 바뀔 때
      if (destinationListid === sourceListid) {
        const cardidOrders = listidCardids[destinationListid];
        dispatch(LC.setListidCardids({
          listid: destinationListid,
          cardids: U.swapItemsInArray(cardidOrders, sourceCardIndex, destinationCardIndex)
        }));
      } 
      // 케이스 B: 다른 리스트로 카드가 이동할 때
      else {
        // 1. 소스 리스트에서 카드 ID 제거
        const sourceCardids = listidCardids[sourceListid];
        dispatch(LC.setListidCardids({
          listid: sourceListid,
          cardids: U.removeItemAtIndexInArray(sourceCardids, sourceCardIndex)
        }));
        
        // 2. 타겟 리스트의 특정 위치에 카드 ID 삽입
        const destinationCardids = listidCardids[destinationListid];
        dispatch(LC.setListidCardids({
          listid: destinationListid,
          cardids: U.insertItemAtIndexInArray(destinationCardids, destinationCardIndex, draggableId)
        }));
      }
    },
    [dispatch, listidCardids]
  )

  return {lists, onCreateList, onRemoveList, onMoveList, onDragEnd}
}