/**
 * listEntities 도메인에서 사용하는 액션 타입 상수
 */
export const ADD_LIST = '@listEntities/add'
export const REMOVE_LIST = '@listEntities/remove'

/**
 * State 구조 설명 (JSDoc)
 * @typedef {Object.<string, import('../commonTypes').List>} State
 * 이 상태는 리스트의 UUID를 키로, 리스트 객체를 값으로 가지는 Hash Map 구조입니다.
 */

// 공통 타입 데이터 구조를 다시 내보냄 (필요 시)
export * from '../commonTypes'