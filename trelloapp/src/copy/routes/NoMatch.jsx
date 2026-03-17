import React, {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
// 기존에 설치한 daisyui와 공통 컴포넌트들을 활용합니다.
import {Button} from '../../theme/daisyui' 
import {Title} from '../../components/TextComponents'

export default function NoMatch() {
  const navigate = useNavigate()

  // 이전 페이지로 돌아가는 함수
  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-base-200">
      {/* 경고 메시지 영역 */}
      <div className="alert alert-error shadow-lg max-w-md">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d=" shadow-lg max-w-md10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xl font-bold">Oops! No page found!</span>
        </div>
      </div>

      <Title className="mt-8 text-secondary">404 - Not Found</Title>
      
      <div className="flex justify-center mt-6">
        {/* DaisyUI 버튼 스타일 적용 */}
        <Button className="btn-primary btn-md shadow-md" onClick={goBack}>
          이전으로 돌아가기
        </Button>
      </div>
    </div>
  )
}