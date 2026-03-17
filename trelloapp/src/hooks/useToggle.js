import {useState, useCallback} from 'react'

/**
 * 불리언(boolean) 상태를 반전시키는 로직을 관리하는 커스텀 훅입니다.
 * @param {boolean} initialChecked - 초기값 (기본값: false)
 * @returns {[boolean, function]} 현재 상태와 상태를 반전시키는 함수를 배열로 반환
 */
export const useToggle = (initialChecked = false) => {
  const [checked, setChecked] = useState(initialChecked)
  
  // useCallback을 사용하여 컴포넌트가 리렌더링되어도 함수 인스턴스를 유지합니다.
  // 자식 컴포넌트에 props로 전달할 때 불필요한 리렌더링을 방지할 수 있습니다.
  const toggleChecked = useCallback(() => setChecked(checked => !checked), [])
  
  return [checked, toggleChecked]
}