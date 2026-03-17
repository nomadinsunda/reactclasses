import { useState } from 'react'

function TodoInput({ dispatch }) {
  const [input, setInput] = useState('')

  const handleAdd = () => {
    if (input.trim() === '') return
    // type 키는 action.type,
    // text 키는 action.payload
    dispatch({ type: 'ADD', text: input }) // text는 payload
    setInput('')
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleAdd} style={{ marginLeft: '10px' }}>추가</button>
    </div>
  )
}

export default TodoInput
