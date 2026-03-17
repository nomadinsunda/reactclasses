import {useLocation} from 'react-router-dom'
import {useMemo} from 'react'
import queryString from 'query-string'

/**
 * URL의 쿼리 스트링(?key=value)을 파싱하여 객체로 반환하는 훅입니다.
 */
const useQueryString = () => {
  const {search} = useLocation()

  // search 문자열이 변경될 때만 다시 파싱합니다.
  const query = useMemo(() => {
    return queryString.parse(search, {
      parseNumbers: true, // "123"을 숫자 123으로 자동 변환
      parseBooleans: true // "true"를 불리언 true로 자동 변환
    })
  }, [search])

  return query
}

export default useQueryString