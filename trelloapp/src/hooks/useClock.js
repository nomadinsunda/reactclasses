import {useState} from 'react'
import {useInterval} from './useInterval'

/**
 * 실시간 시간을 관리하는 커스텀 훅입니다.
 * @param {number} interval - 업데이트 간격 (기본값: 1000ms)
 * @returns {Date} 현재 시간 객체
 */
export const useClock = (interval = 1000) => {
  const [today, setToday] = useState(new Date())

  // useInterval을 사용하여 지정된 간격마다 현재 시간을 갱신합니다.
  useInterval(() => setToday(new Date()), interval)

  return today
}