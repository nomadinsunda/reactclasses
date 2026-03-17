import React from 'react';
import { Draggable } from '@hello-pangea/dnd';

export const ListDraggable = ({ id, index, children, className, ...props }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => 
      (

        
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps} // 리스트를 잡고 옮길 수 있게 함
          className={`${className} ${snapshot.isDragging ? 'z-50' : ''}`}
          style={{
            ...provided.draggableProps.style,
            opacity: snapshot.isDragging ? 0.5 : 1,
          }}
          {...props}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};