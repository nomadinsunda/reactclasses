import { useCallback } from 'react'
import { useLocation, useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Div, Avatar } from '../components'
import { Button } from '../theme/daisyui'

export default function Card() {
  const location = useLocation()
  const params = useParams()
  const navigate = useNavigate()
  const [search] = useSearchParams()

  const { cardid } = params

  /**
   * [개선 사항] useState와 useEffect를 사용하지 않습니다.
   * useSelector를 통해 스토어에서 직접 데이터를 읽어오면
   * 스토어 값이 바뀔 때 자동으로 리렌더링이 수행됩니다.
   */
  const card = useSelector(({ cardEntities }) => 
    cardid ? cardEntities[cardid] : null
  )

  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  /**
   * 1. 카드 데이터가 없는 경우 (디버깅 정보 표시)
   */
  if (!card) {
    return (
      <div className="p-4">
        <p className="font-bold text-red-500 mb-2">Card not found or loading...</p>
        <p>location: {JSON.stringify(location, null, 2)}</p>
        <p>params: {JSON.stringify(params, null, 2)}</p>
        <p>cardid: {cardid}</p>
        <p>
          from: {search.get('from')}, to: {search.get('to')}
        </p>
        <Button className="mt-4 btn-primary btn-xs" onClick={goBack}>
          GO BACK
        </Button>
      </div>
    )
  }

  /**
   * 2. 카드 데이터가 존재하는 경우 (상세 뷰 표시)
   */
  return (
    <div className="p-4">
      {/* 카드 메인 이미지 */}
      <Div src={card.image} className="w-full rounded-lg" minHeight="10rem" height="10rem" />
      
      {/* 작성자 정보 영역 */}
      <Div className="flex flex-row items-center mt-4">
        <Avatar src={card.writer.avatar} size="2rem" />
        <Div className="ml-2">
          <p className="text-xs font-bold">{card.writer.name}</p>
          <p className="text-xs text-gray-500">{card.writer.jobTitle}</p>
        </Div>
      </Div>

      {/* 액션 버튼 */}
      <div className="flex gap-2 mt-4">
        <Button className="btn-primary btn-xs" onClick={goBack}>
          GO BACK
        </Button>
      </div>
    </div>
  )
}