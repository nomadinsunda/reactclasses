import { useMemo } from 'react';
/* 패키지 명을 react-beautiful-dnd에서 @hello-pangea/dnd로 변경하였습니다. */
import { DragDropContext } from '@hello-pangea/dnd';
import { Title } from '../../components';
import CreateListForm from './CreateListForm';
import BoardList from '../BoardList';
import { ListDroppable } from '../../components';

import { useLists } from '../../store/useLists';

export default function Board() {
  const { lists, onCreateList, onRemoveList, onMoveList, onDragEnd } = useLists();

  const children = useMemo(
    () =>
      lists.map((list, index) => (
        <BoardList
          key={list.uuid}
          list={list}
          onRemoveList={onRemoveList(list.uuid)}
          index={index}
          onMoveList={onMoveList}
        />
      )),
    [lists, onMoveList, onRemoveList]
  );

  return (
    <section className="w-full h-full mt-4">
      <Title>Board</Title>
      
      <DragDropContext onDragEnd={onDragEnd}>
        {/* 가로/세로 스크롤 허용하고 내부 아이템들이 한 줄로 나열되도록 설정 */}
        <div className="overflow-x-auto overflow-y-auto p-4 h-[calc(100vh-200px)]">
          <ListDroppable 
            droppableId="board" 
            direction="horizontal" 
            className="flex flex-row items-start min-h-full"
          >
            {/* 1. 생성된 리스트들 */}
            {children}
            
            {/* 2. 리스트 추가 폼: flex-shrink-0을 주어 공간이 부족해도 찌그러지지 않게 함 */}
            <div className="flex-shrink-0">
              <CreateListForm onCreateList={onCreateList} />
            </div>
          </ListDroppable>
        </div>
      </DragDropContext>
    </section>
  );
}

