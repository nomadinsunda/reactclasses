/**
 * 파일(Blob/File)을 읽어 Base64 데이터 URL 문자열로 반환하는 Promise 함수
 * @param {Blob} file - 읽을 이미지 파일 객체
 * @returns {Promise<string>} - Base64로 인코딩된 이미지 문자열
 */
export const imageFileReaderP = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader()

    // 파일 읽기가 완료되었을 때 실행될 핸들러
    fileReader.onload = (e) => {
      const result = e.target?.result // base64 인코딩 결과물

      if (result && typeof result === 'string') {
        resolve(result)
      } else {
        reject(new Error(`imageFileReaderP: 이미지 파일을 읽을 수 없습니다.`))
      }
    }

    // 에러 발생 시 핸들러 추가 (방어적 코딩)
    fileReader.onerror = () => {
      reject(new Error(`imageFileReaderP: FileReader 에러가 발생했습니다.`))
    }

    // 파일을 Data URL(Base64) 형태로 읽기 시작
    fileReader.readAsDataURL(file)
  })