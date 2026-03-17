import {useState} from 'react'
import {useEventListener} from './useEventListener'

/**
 * 브라우저 창의 크기를 실시간으로 추적하는 커스텀 훅 (최적화 버전)
 */
export const useWindowResize = () => {
  // [해결] useEffect 안에서 세팅하는 대신, 초기값 단계에서 직접 window 값을 읽어옵니다.
  // 이렇게 하면 첫 번째 렌더링 때부터 정확한 크기를 가지므로 렌더링 횟수가 줄어듭니다.
  const [widthHeight, setWidthHeight] = useState([
    window.innerWidth, 
    window.innerHeight
  ])

  // 창 크기가 변경될 때만 상태를 업데이트합니다.
  useEventListener(window, 'resize', () => {
    setWidthHeight([window.innerWidth, window.innerHeight])
  })

  return widthHeight
}