import * as C from './chance'
import * as I from './image'

/**
 * @typedef {Object} CustomerComment
 * @property {string} uuid - 고유 식별자
 * @property {string} name - 고객 이름
 * @property {string} jobTitle - 직업
 * @property {string} company - 소속 회사
 * @property {string} avatar - 아바타 이미지 URL
 * @property {string} comment - 후기 내용
 */

/**
 * 고객 댓글 객체를 생성하는 함수
 */
export const makeCustomerComment = (
  uuid,
  name,
  jobTitle,
  company,
  avatar,
  comment
) => ({
  uuid,
  name,
  jobTitle,
  company,
  avatar,
  comment
})

/**
 * 무작위 데이터를 채운 고객 댓글 객체를 생성하는 함수
 */
export const makeRandomCustomerComment = () =>
  makeCustomerComment(
    C.randomUUID(),
    C.randomName(),
    C.randomJobTitle(),
    C.randomCompanyName(),
    I.randomAvatar(),
    C.randomParagraphs(1)
  )