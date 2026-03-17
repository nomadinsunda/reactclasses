/* eslint-disable react-refresh/only-export-components */
import React, {createContext, useContext} from 'react'
import {useWindowResize} from '../hooks'

// 1. Context 객체는 export 하지 않고 내부에서만 사용하여 HMR 충돌을 방지합니다.
const ResponsiveContext = createContext({
  breakpoint: ''
})

// 2. Provider 컴포넌트
export const ResponsiveProvider = ({children}) => {
  const [width] = useWindowResize()
  
  // Tailwind CSS 표준 브레이크포인트 기준 적용
  // prettier-ignore
  const breakpoint = width < 640 ? 'sm' :
                     width < 768 ? 'md' :
                     width < 1024 ? 'lg' :
                     width < 1280 ? 'xl' : '2xl'

  const value = {
    breakpoint
  }

  return <ResponsiveContext.Provider value={value}>{children}</ResponsiveContext.Provider>
}

// 3. 외부에서는 이 커스텀 훅을 통해서만 데이터를 가져옵니다.
export const useResponsive = () => {
  const {breakpoint} = useContext(ResponsiveContext)
  return breakpoint
}