import * as C from './chance'
import * as I from './image'

/**
 * @typedef {Object} IUser
 * @property {string} uuid
 * @property {string} name
 * @property {string} jobTitle
 * @property {string} email
 * @property {string} avatar
 */

/**
 * 사용자 객체를 생성하는 함수 (prettier-ignore 유지)
 */
// prettier-ignore
export const makeUser = (uuid, name, jobTitle, email, avatar) => 
  ({uuid, name, jobTitle, email, avatar})

/**
 * 무작위 데이터를 채운 사용자 객체를 생성하는 함수
 */
export const makeRandomUser = () =>
  makeUser(
    C.randomUUID(),
    C.randomName(),
    C.randomJobTitle(),
    C.randomEmail(),
    I.randomAvatar()
  )