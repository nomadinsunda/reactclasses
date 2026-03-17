import * as L from './localStorageP'

/**
 * 저장소에서 문자열을 읽어와 객체로 변환합니다.
 * @param {string} key - 데이터 키
 * @returns {Promise<Object|null>} - 파싱된 객체 또는 null
 */
export const readObjectP = (key) =>
  new Promise((resolve, reject) => {
    L.readStringP(key)
      .then(value => resolve(value ? JSON.parse(value) : null))
      .catch(reject)
  })

/**
 * 객체를 JSON 문자열로 변환하여 저장소에 기록합니다.
 * @param {string} key - 데이터 키
 * @param {Object} value - 저장할 객체
 */
export const writeObjectP = (key, value) =>
  L.writeStringP(key, JSON.stringify(value))