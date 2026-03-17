import { CardDraggable } from '../../components'
import { Div, Avatar } from '../../components'
import { Icon } from '../../theme/daisyui'

const ListCard = ({ card, onRemove, onClick, draggableId, index }) => {
  const { image, writer } = card
  const { avatar, name, jobTitle } = writer

  return (
    <CardDraggable draggableId={draggableId} index={index}>
      <Div 
        className="m-2 border shadow-lg rounded-xl overflow-hidden cursor-pointer" 
        width="10rem" 
        onClick={onClick}
      >
        {/* 카드 이미지 및 삭제 버튼 */}
        <Div src={image} className="relative h-20">
          <Icon
            name="remove"
            className="absolute right-1 top-1 btn-primary btn-xs"
            onClick={(e) => {
              // 이벤트 전파 방지: 삭제 버튼 클릭 시 카드 전체 클릭 이벤트(상세 이동)가 발생하지 않도록 함
              e.stopPropagation()
              onRemove && onRemove()
            }}
          />
        </Div>

        {/* 작성자 정보 섹션 */}
        <Div className="flex flex-col p-2">
          <Div minHeight="4rem" height="4rem" maxHeight="4rem">
            <Div className="flex flex-row items-center">
              <Avatar src={avatar} size="2rem" />
              <Div className="ml-2">
                <p className="text-xs font-bold">{name}</p>
                <p className="text-xs text-gray-500">{jobTitle}</p>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </CardDraggable>
  )
}

export default ListCard