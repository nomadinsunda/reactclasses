import Chance from 'chance'
const chance = new Chance()

// 고유 식별자 및 사용자 정보 관련
export const randomUUID = () => chance.guid()
export const randomName = () => chance.name()
export const randomEmail = () => chance.email()
export const randomId = () => chance.fbid() // facebook id 사용

// 직업 및 기업 관련
export const randomJobTitle = () => chance.profession()
export const randomCompanyName = () => chance.company()

// 텍스트 생성 관련
export const randomSentence = (words = 5) => chance.sentence({words})
export const randomTitleText = (words = 3) => chance.sentence({words})
export const randomParagraphs = (sentences = 3) => chance.paragraph({sentences})