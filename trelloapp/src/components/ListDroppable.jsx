import React from 'react';
import { Droppable } from '@hello-pangea/dnd';

export const ListDroppable = ({ droppableId, children, ...props }) => {
  return (
    <Droppable 
      droppableId={droppableId} 
      direction="horizontal" // 리스트들이 가로로 배치된다면 horizontal 설정
      type="list"            // 카드 Droppable과 구분하기 위한 타입 지정
    >
      {(provided, snapshot) => (
        <div
          {...props}
          ref={provided.innerRef}
          {...provided.droppableProps}
          // snapshot을 활용해 드래그 중인 리스트가 위로 올라왔을 때 스타일 처리 가능
          className={`${props.className} ${snapshot.isDraggingOver ? 'bg-gray-200/50' : ''}`}
        >
          {children}
          
          {/* ⭐️ 가장 중요한 포인트: placeholder 
              아이템이 드래그되어 나간 빈 자리를 유지해줍니다. */}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};