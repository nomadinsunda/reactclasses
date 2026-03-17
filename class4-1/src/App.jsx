import { useState } from 'react'
import './App.css'

function App() {
 
  const [clickCount, setClickCount] = useState(0);
  const [text, setText] = useState("");

  const handleParentCapture = (e) => {
    console.log("1. 부모 캡처링: 클릭 감지! 카운트를 올리고 리렌더링을 일으킵니다.");
    
    setClickCount(prev => prev + 1); // -> clickCount라는 state 값을 변경시키기 때문에, 리렌더링이 발생!!!
  }

  return (
    
    <div style={{ padding: '20px' }}>
      <h3>부모 캡처링 개입으로 인한 UI 결함 예시</h3>      

      <div       
        onClick={handleParentCapture} 
        style={{ padding: '30px', backgroundColor: '#dfe6e9' }}
      >
        <p>부모 영역 클릭 횟수: {clickCount}</p>
        <p>input 텍스트: {text}</p>
        <p>아래 입력창을 클릭해서 글을 써보세요.</p>
        
        {/* 부모가 캡처링에서 상태를 바꾸면, 
          사용자가 이 Input을 클릭하는 '순간' 부모가 리렌더링됩니다.
          이로 인해 Input이 포커스를 잃거나(Blur), 
          브라우저가 다음 이벤트(Focus)를 정상적으로 처리하지 못할 수 있습니다.
        */}
        <input 
          type="text" 
          placeholder="여기를 클릭해도 포커스가 안 잡힐 수 있습니다!"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onClick={() => console.log("2. 자식: 클릭 이벤트 도달")}
          style={{ width: '300px', padding: '10px' }}
        />
      </div>

      <div style={{ marginTop: '20px', color: '#e17055' }}>
        <strong>발생하는 문제:</strong>
        <ul>
          <li><strong>포커스 탈취:</strong> 클릭하자마자 부모가 리렌더링되면서, 브라우저가 Input에 주려던 포커스가 취소될 수 있습니다.</li>
          <li><strong>논리적 순서 꼬임:</strong> 자식의 비즈니스 로직이 실행되기 전에 부모의 상태가 먼저 변해버려, 데이터 일관성이 깨집니다.</li>
          <li><strong>성능 저하:</strong> 모든 하위 요소의 클릭마다 최상위 부모가 리렌더링을 시도하므로 앱이 무거워집니다.</li>
        </ul>
      </div>
    </div>
  )
}

export default App
