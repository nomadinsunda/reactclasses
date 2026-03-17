// src/sections/DerivedStateDemo.jsx
// import { useState, useEffect } from 'react';
import { useState} from 'react';


export default function DerivedStateDemo() {
  const [firstName, setFirstName] = useState('Ada');
  const [lastName, setLastName] = useState('Lovelace');
  // const [fullName, setFullName] = useState('');

  // ❌ 나쁜 예 (실제 실행 코드는 아니고, 설명용 문자열)
  const badExample = `// ❌ 나쁜 예 - 파생 상태를 useEffect로 관리
// fullName은 firstName과 lastName의 concate로 생성된다면,
// 굳이 다음과 같이 useState + useEffect 조합을 사용한 결과를
// useState로 사용하는 것은 좋지 않다.

const [fullName, setFullName] = useState('');

useEffect(() => {
  setFullName(firstName + ' ' + lastName);
}, [firstName, lastName]);`;

// ❌ 나쁜 예: 해당 useEffect의 콜백함수가 렌더링 후에 실행됨.
// useEffect(() => {
//   setFullName(firstName + ' ' + lastName); // ---> fullName state가 변경됨으로 인해 불필요하게 렌더링이 발생하게 됨
// }, [firstName, lastName]);

  // ✅ 좋은 예: 렌더링 중에 계산
  const fullName = `${firstName} ${lastName}`;

  // Web API가 이 이벤트 핸들러를 매스크태스크 큐에 큐잉하고
  // 이벤트 루프가 큐 우선순위에 입각해서 콜스택이 완전히 비어 있으면,
  // 매스크태스크 큐에 이 이벤트 핸들러를 디큐해서 콜스택에 푸시해서 이 이벤트 핸들러가 실행되게 함!!!
  // Call Stack + Event Loop + Queues(Mask/Micro Task Queues) + Web API : 자바스크립트 코드를 실행시키는 것들?.
  // e 파라미터의 아규먼트는 Web API가 전달하는 onchange 이벤트가 될것임.
  const onChangeEventHandler = (e) => setLastName(e.target.value);

  return (
    <div className="card">
      <div className="section-title">
        <span>9.</span>
        <h2>파생 상태(derived state)는 effect로 만들지 않기 🚫</h2>
      </div>

      <p style={{ fontSize: 13 }}>
        단순히 <code>props</code>나 <code>state</code>로부터 계산 가능한 값이라면,
        <br />
        <code>useEffect</code> + <code>useState</code>로 “복사본 상태”를 만들기보다 그냥 계산식으로 표현하는
        편이 낫습니다.
      </p>

      <div className="card" style={{ marginTop: 12 }}>
        <span className="badge">나쁜 예 (effect로 파생 상태 관리)</span>
        <div className="code">{badExample}</div>
      </div>

      <div className="card">
        <span className="badge">좋은 예 (렌더링 중 계산)</span>
        <div className="button-row">
          <input
            style={{ padding: '4px 8px', borderRadius: 6, border: '1px solid #cbd5e1' }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="firstName"
          />
          {/*<input
            style={{ padding: '4px 8px', borderRadius: 6, border: '1px solid #cbd5e1' }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="lastName"
          />*/}
          <input
            style={{ padding: '4px 8px', borderRadius: 6, border: '1px solid #cbd5e1' }}
            value={lastName}
            onChange={onChangeEventHandler}
            placeholder="lastName"
          />
        </div>
        <p style={{ fontSize: 13, marginTop: 8 }}>
          fullName = <strong>{fullName}</strong>
        </p>
        <div className="code">{`// ✅ 좋은 예
const fullName = \`\${firstName} \${lastName}\`;`}</div>
      </div>
    </div>
  );
}
