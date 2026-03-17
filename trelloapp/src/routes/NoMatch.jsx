import React, {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from '../theme/daisyui'

/**
 * 정의되지 않은 경로(404)로 접근했을 때 표시되는 컴포넌트입니다.
 */
export default function NoMatch() {
  const navigate = useNavigate()

  // 이전 페이지로 돌아가는 핸들러
  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      {/* 에러 메시지 영역 */}
      <div className="w-full max-w-md alert alert-error shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d=" shadow-lg 10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xl font-bold">Oops! No page found!</span>
        </div>
      </div>

      {/* 뒤로가기 버튼 영역 */}
      <div className="flex justify-center mt-8">
        <Button className="btn-primary" onClick={goBack}>
          Go Back to Safety
        </Button>
      </div>
    </div>
  )
}