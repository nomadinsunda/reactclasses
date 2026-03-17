import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from './components/Container';
import './App.css';

function App() {
  return (
    // HTML5Backend를 사용하여 데스크톱 브라우저 환경 설정
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1>React DnD Playground</h1>
        <Container />
      </div>
    </DndProvider>
  );
}

export default App;