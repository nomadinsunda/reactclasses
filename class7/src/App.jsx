// src/App.jsx
import { useState } from 'react';
import { TabBar } from './components/TabBar.jsx';
import BasicEffectDemo from './sections/BasicEffectDemo.jsx';
import DependencyPatternsDemo from './sections/DependencyPatternsDemo.jsx';
import CleanupAndLifecycleDemo from './sections/CleanupAndLifecycleDemo.jsx';
import FetchTimerEventDemo from './sections/FetchTimerEventDemo.jsx';
import BugPatternsDemo from './sections/BugPatternsDemo.jsx';
import DerivedStateDemo from './sections/DerivedStateDemo.jsx';
import LayoutEffectDemo from './sections/LayoutEffectDemo.jsx';
import SsrSafeEffectDemo from './sections/SsrSafeEffectDemo.jsx';

const TABS = [
  { id: 'basic', label: '2. 기본 개념/문법' },
  { id: 'deps', label: '3. 의존성 패턴' },
  { id: 'cleanup', label: '4~6. 라이프사이클 & cleanup' },
  { id: 'patterns', label: '7. 데이터/타이머/이벤트' },
  { id: 'bugs', label: '8. 버그 패턴' },
  { id: 'derived', label: '9. 파생 상태(derived state)' },
  { id: 'layout', label: '10. useLayoutEffect' },
  { id: 'ssr', label: '11~12. SSR & 체크리스트' },
];

export default function App() {
  
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <div className="app-root">
      <header style={{ marginBottom: 16 }}>
        <h1>🔬 useEffect 실험실 (Vite + React)</h1>
        <p style={{ fontSize: 14, color: '#4b5563' }}>
          “렌더링 이후에 일어나는 모든 side effect를 관리하는 중심 Hook” 을
          섹션별로 체험하는 샘플입니다.
        </p>
      </header>

      <TabBar tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

      // 아래의 자식 컴포넌트들중에 마운트된 컴포넌트가 있고,
      // 이번 렌더링에서 이 컴포넌트가 자식 컴포넌트로 등록되지 않으면
      // 언마운트됨.
      {activeTab === 'basic' && <BasicEffectDemo />}
      {activeTab === 'deps' && <DependencyPatternsDemo />}
      {activeTab === 'cleanup' && <CleanupAndLifecycleDemo />}
      {activeTab === 'patterns' && <FetchTimerEventDemo />}
      {activeTab === 'bugs' && <BugPatternsDemo />}
      {activeTab === 'derived' && <DerivedStateDemo />}
      {activeTab === 'layout' && <LayoutEffectDemo />}
      {activeTab === 'ssr' && <SsrSafeEffectDemo />}
    </div>
  );
}
