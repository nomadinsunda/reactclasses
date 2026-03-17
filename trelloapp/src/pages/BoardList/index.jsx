import { useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Div } from '../../components'
import { CardDroppable } from '../../components'
import { Icon } from '../../theme/daisyui'
import { ListDraggable } from '../../components'
import ListCard from '../ListCard'
import { useCards } from '../../store/useCards'

const BoardList = ({
  list,
  onRemoveList,
  index,
  onMoveList,
  ...props
}) => {
  const { cards, onPrependCard, onAppendCard, onRemoveCard } = useCards(list.uuid)
  const navigate = useNavigate()

  // 카드 클릭 시 상세 페이지로 이동하는 핸들러
  const cardClicked = useCallback(
    (cardid) => () => {
      navigate(`/board/card/${cardid}`)
    },
    [navigate]
  )

  // 카드 리스트 렌더링 최적화
  const children = useMemo(
    () =>
      cards.map((card, index) => (
        <ListCard
          key={card.uuid}
          card={card}
          onRemove={onRemoveCard(card.uuid)}
          draggableId={card.uuid}
          index={index}
          onClick={cardClicked(card.uuid)}
        />
      )),
    [cards, onRemoveCard, cardClicked]
  )

  return (
    /* 리스트 자체를 드래그 가능하게 만드는 컴포넌트 */
    <ListDraggable id={list.uuid} index={index} onMove={onMoveList}>
      <Div
        {...props}
        className="p-3 m-2 bg-gray-100 rounded-xl shadow-md border border-gray-200 flex-shrink-0"
        width="18rem">
          
        <div className="flex justify-between mb-2">
          {/* 오타 수정: line-clapm-1 -> line-clamp-1 */}
          <p className="w-32 text-sm font-bold underline line-clamp-1">{list.title}</p>
        </div>
        
        <div className="flex justify-between ml-2">
          <Icon name="remove" className="btn-error btn-xs" onClick={onRemoveList} />
          <div className="flex">
            <Icon
              name="post_add"
              className="btn-success btn-xs"
              onClick={onPrependCard}
            />
            <Icon
              name="playlist_add"
              className="ml-2 btn-success btn-xs"
              onClick={onAppendCard}
            />
          </div>
        </div>

        {/* 카드가 드롭되는 영역 */}
        <CardDroppable droppableId={list.uuid}>
          {children}
        </CardDroppable>
      </Div>
    </ListDraggable>
  )
}

export default BoardList