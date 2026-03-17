import React from 'react'
import {Droppable} from '@hello-pangea/dnd'

export const CardDroppable = ({ droppableId, children }) => {
  return (
    <Droppable droppableId={droppableId} type="card">
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          // 1. snapshot.isDraggingOver를 이용해 카드가 올라왔을 때 배경색을 살짝 바꿔줍니다.
          // 2. transition을 주어 색상 변화를 부드럽게 처리합니다.
          className={`flex flex-col p-2 min-h-[150px] transition-colors duration-200 rounded-lg ${
            snapshot.isDraggingOver ? 'bg-blue-100/50' : 'bg-transparent'
          }`}
        >
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}