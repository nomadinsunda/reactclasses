import {useEffect} from 'react'

/**
 * 일정 시간마다 반복해서 콜백 함수를 실행하는 커스텀 훅입니다.
 * @param {Function} callback - 실행할 함수
 * @param {number} duration - 실행 간격 (ms, 기본값: 1000)
 */
export const useInterval = (callback, duration = 1000) => {
  useEffect(() => {
    // 1. 타이머 설정
    const id = setInterval(callback, duration)
    
    // 2. 클린업 함수: 컴포넌트가 언마운트되거나 
    //    callback/duration이 변경될 때 이전 타이머를 제거합니다.
    return () => clearInterval(id)
  }, [callback, duration])
}