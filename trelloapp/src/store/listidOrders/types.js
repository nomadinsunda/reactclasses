/**
 * listidOrders 도메인에서 사용하는 액션 타입 상수
 */
export const SET_LISTID_ORDERS = '@listidOrders/set'
export const ADD_LISTID_TO_ORDERS = '@listidOrders/add'
export const REMOVE_LISTID_FROM_ORDERS = '@listidOrders/remove'

/**
 * State 구조 설명 (JSDoc)
 * @typedef {string[]} State
 * 보드에 표시될 리스트 UUID들의 배열입니다. 
 * 배열의 인덱스가 화면상의 리스트 위치(순서)를 결정합니다.
 * 예: ["list-1-uuid", "list-2-uuid"]
 */

// 공통 타입 데이터 구조(UUID 등) 재내보내기
export * from '../commonTypes'