import React from 'react'

const CopyMe = ({children, ...props}) => {
  // children을 포함한 모든 props를 div에 전달하여 
  // 레이아웃 컴포넌트로서 유연하게 동작하도록 합니다.
  return <div {...props}>{children}</div>
}

export default CopyMe