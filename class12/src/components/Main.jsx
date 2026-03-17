import React, { useReducer } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoControls from './TodoControls'

// reducer 함수
function todoReducer(states, action) {
  switch (action.type) {
    case 'ADD':  // action.payload -> payload 명명은 고정 X : 여기서는 text라는 이름으로 payload를 지정
      return [...states, { id: Date.now(), text: action.text, done: false }]
    case 'REMOVE':
      return states.filter(todo => todo.id !== action.id) // filter는 새로운 배열을 만듦. 
    case 'TOGGLE':
      // todo는 todos의 각 element
      return states.map(todo =>
        // done 속성만 이 새로운 값으로 덮어씌워집니다.
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      )
    case 'CLEAR':
      return []
    default:
      return states
  }
}

function Main() {
  // todos (State): 현재의 상태값입니다. 여기서는 할 일 목록(배열)이 담기게 됩니다. 컴포넌트는 이 값을 참조하여 UI를 렌더링합니다.
  // dispatch (전송 함수): 상태를 업데이트하기 위한 '전달자'입니다. 
  //                      "삭제해줘", "추가해줘" 같은 명령(Action)을 todoReducer에 보낼 때 사용합니다.
  // todoReducer (함수): 상태를 어떻게 바꿀지 결정하는 논리 설계도입니다. 
  //                     현재 상태와 액션을 받아서 새로운 상태를 반환하는 순수 함수여야 합니다.
  // [] (초기값): todos의 시작 상태입니다. 여기서는 빈 배열로 설정되어 있네요
  // 동작 원리 흐름도
  // useReducer가 어떻게 작동하는지 시각적으로 이해하면 훨씬 쉽습니다.
  // 1. 사용자 이벤트 발생: 사용자가 '추가' 버튼을 누릅니다.
  // 2. Dispatch 호출: dispatch({ type: 'ADD_TODO', payload: '공부하기' })를 실행합니다.
  // 3. Reducer 실행: React가 todoReducer를 실행합니다. 이때 현재의 todos와 방금 보낸 action을 아규먼트로 전달합니다.
  // 4. 상태 업데이트: Reducer가 계산해서 내놓은 새로운 배열이 새로운 todos가 되고, 화면이 다시 그려집니다.
  const [todos, dispatch] = useReducer(todoReducer, [])

  console.log(todos)

  /* todos 예
    [
      { id: 1706123456789, text: '공부하기', done: false },
      { id: 1707049384753, text: '운동하기', done: true }
    ]

  */

  return (
    <main style={{ padding: '20px' }}>
      <TodoInput dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
      <TodoControls dispatch={dispatch} />
    </main>
  )
}

export default Main
