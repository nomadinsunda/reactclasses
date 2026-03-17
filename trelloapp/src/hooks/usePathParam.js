import {useLocation} from 'react-router-dom'
import {useMemo} from 'react'

/**
 * 현재 URL 경로(pathname)를 분석하여 유용한 정보를 반환하는 훅입니다.
 */
const usePathParams = () => {
  const {pathname} = useLocation()

  // 경로를 '/' 기준으로 쪼개어 배열로 관리 (예: '/board/123' -> ['board', '123'])
  // useMemo를 사용해 pathname이 변하지 않으면 재계산을 방지합니다.
  const pathSteps = useMemo(() => {
    return pathname.split('/').filter(step => step.length > 0)
  }, [pathname])

  return {
    pathname,   // 전체 경로 (예: "/board/view/1")
    pathSteps,  // 경로 단계 배열 (예: ["board", "view", "1"])
    lastStep: pathSteps[pathSteps.length - 1] // 마지막 단계 값
  }
}

export default usePathParams