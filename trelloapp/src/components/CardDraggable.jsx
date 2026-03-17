import React from 'react'
import {Draggable} from '@hello-pangea/dnd'

export const CardDraggable = ({ draggableId, index, children }) => {
  return (
    // provided.draggableProps 안에 들어있는 그 복잡한 데이터들을 div라는 HTML 태그의 속성(Attribute)으로 전달
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => {
        // console.log(...provided.draggableProps)
        // console.log(...provided.draggableProps.style)
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            // 1. Snapshot을 이용해 드래그 중일 때의 스타일을 제어할 수 있습니다.
            style={{
              ...provided.draggableProps.style,
              cursor: 'grab', // 마우스 커서를 잡기 모양으로 변경
              opacity: snapshot.isDragging ? 0.8 : 1 // 드래그 중일 때 살짝 투명하게
            }}
          >
            {children}
          </div>
        )
      }}
    </Draggable>
  )
}