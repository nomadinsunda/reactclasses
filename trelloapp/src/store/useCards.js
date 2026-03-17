import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as C from '../store/cardEntities'
import * as LC from '../store/listidCardids'
import * as D from '../data'

export const useCards = (listid) => {
  const dispatch = useDispatch()

  // 리덕스 스토어에서 해당 리스트에 속한 카드 객체 배열을 가져옵니다.
  const cards = useSelector(({ cardEntities, listidCardids }) => {
    // 해당 listid의 카드 순서(UUID 배열)를 참조하여 실제 카드 엔티티로 맵핑
    const cardIds = listidCardids[listid] || []
    return cardIds.map(uuid => cardEntities[uuid])
  })

  // 리스트의 맨 앞에 새 카드 추가
  const onPrependCard = useCallback(() => {
    const card = D.makeRandomCard()
    dispatch(C.addCard(card))
    dispatch(LC.prependCardidToListid({ listid, cardid: card.uuid }))
  }, [dispatch, listid])

  // 리스트의 맨 뒤에 새 카드 추가
  const onAppendCard = useCallback(() => {
    const card = D.makeRandomCard()
    dispatch(C.addCard(card))
    dispatch(LC.appendCardidToListid({ listid, cardid: card.uuid }))
  }, [dispatch, listid])

  // 특정 카드 삭제
  const onRemoveCard = useCallback(
    (uuid) => () => {
      dispatch(C.removeCard(uuid))
      dispatch(LC.removeCardidFormListid({ listid, cardid: uuid }))
    },
    [dispatch, listid]
  )

  return { cards, onPrependCard, onAppendCard, onRemoveCard }
}