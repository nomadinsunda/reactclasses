import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './rootReducer'

// 스토어를 생성하는 내부 함수
const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    // 필요 시 미들웨어 설정을 여기에 추가할 수 있습니다.
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({ serializableCheck: false })
  })
  return store
}

// React 컴포넌트 내에서 스토어 인스턴스를 유지하기 위한 커스텀 훅
export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}