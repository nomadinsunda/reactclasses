/**
 * 프로젝트 전역에서 사용하는 공통 데이터 규격 정의
 */

/** * @typedef {string} UUID - 고유 식별자 (v4 형태)
 */

/**
 * @typedef {Object} List
 * @property {UUID} uuid - 리스트 고유 아이디
 * @property {string} title - 리스트 제목
 */

/**
 * @typedef {Object} CardidListid
 * @property {UUID} cardid - 카드의 UUID
 * @property {UUID} listid - 리스트의 UUID
 */

/**
 * @typedef {Object} ListidCardidS
 * @property {UUID} listid - 부모 리스트의 UUID
 * @property {UUID[]} cardids - 해당 리스트에 속한 카드 UUID들의 배열
 */

/**
 * @typedef {CardidListid & {index: number}} CardidListidIndex
 * 드래그 앤 드롭 시 현재 카드의 위치(index) 정보를 포함하는 규격입니다.
 */