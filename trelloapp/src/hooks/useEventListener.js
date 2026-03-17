import {useEffect} from 'react'

/**
 * 특정 대상에 이벤트 리스너를 등록하고, 컴포넌트 언마운트 시 자동으로 제거합니다.
 * @param {EventTarget} target - 이벤트를 등록할 대상 (window, document, element 등)
 * @param {string} type - 이벤트 타입 (예: 'click', 'resize', 'keydown')
 * @param {Function} callback - 실행할 콜백 함수
 */
export const useEventListener = (target, type, callback) => {
  useEffect(() => {
    // target과 callback이 유효할 때만 리스너를 등록합니다.
    if (target && callback) {
      target.addEventListener(type, callback)
      
      // Cleanup 함수: 컴포넌트가 사라지거나 의존성이 바뀔 때 리스너를 제거하여 메모리 누수를 방지합니다.
      return () => target.removeEventListener(type, callback)
    }
  }, [target, type, callback])
}