import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './rootReducer'
import logger from 'redux-logger'

// Vite 환경에 맞게 import.meta.env 사용 (잘 수정하셨습니다!)
// npm run dev --> development로 MODE가 설정됨.
const useLogger = import.meta.env.MODE !== 'production'

const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      // 1. 디폴트 미들웨어를 가져옵니다 (이미 thunk가 포함되어 있음)
      const middleware = getDefaultMiddleware({
        serializableCheck: false,
      })

      // 2. 개발 환경일 때만 logger를 추가합니다.
      if (useLogger) {
        return middleware.concat(logger)
      }

      return middleware
    }
  })
  
  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}