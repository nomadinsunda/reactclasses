/**
 * @typedef {Object} IRandomUser
 * @property {string} email
 * @property {Object} name
 * @property {string} name.title
 * @property {string} name.first
 * @property {string} name.last
 * @property {Object} picture
 * @property {string} picture.large
 */

/**
 * API 결과에서 필요한 필드만 추출하는 도우미 함수
 */
const convertRandomUser = (result) => {
  const {email, name, picture} = result
  return {email, name, picture}
}

/**
 * randomuser.me API를 호출하여 무작위 사용자 데이터를 가져옵니다.
 */
export const fetchRandomUser = () =>
  new Promise((resolve, reject) => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        // 결과 배열의 첫 번째 사용자 데이터를 변환하여 반환
        const {results} = data
        resolve(convertRandomUser(results[0]))
      })
      .catch((error) => {
        console.error('Fetch error:', error)
        reject(error)
      })
  })