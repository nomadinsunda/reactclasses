import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from './postsApi'
import uiReducer from './uiSlice'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
})
