/**
 * 저장소에서 데이터를 읽어오는 비동기 함수
 * @param {string} key - 찾으려는 데이터의 키
 */
export const readItemFromStorageP = (key) =>
  new Promise((resolve, reject) => {
    try {
      const value = localStorage.getItem(key)
      resolve(value)
    } catch (e) {
      reject(e)
    }
  })

/**
 * 저장소에 데이터를 쓰는 비동기 함수
 * @param {string} key - 저장할 데이터의 키
 * @param {string} value - 저장할 값
 */
export const writeItemToStorageP = (key, value) =>
  new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, value)
      resolve(value)
    } catch (e) {
      reject(e)
    }
  })

// 별칭(Alias) 설정: 문자열 데이터 처리에 명확한 이름을 부여합니다.
export const readStringP = readItemFromStorageP
export const writeStringP = writeItemToStorageP