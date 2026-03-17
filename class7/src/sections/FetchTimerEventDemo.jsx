// src/sections/FetchTimerEventDemo.jsx
import { useEffect, useState } from 'react';

function FetchUsers({ search }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    // AbortController는 비동기 작업을 외부에서 “중단(abort)”시키기 위해 제공되는 표준 Web API
    const controller = new AbortController(); // 인스턴스

    // Promise의 Syntatic Sugar Code --> async
    async function load() {
      setLoading(true);
      try {
        // 실습 시에는 자신이 만든 API로 바꿔도 됩니다.
        // https://jsonplaceholder.typicode.com/users?search=${encodeURIComponent(search)} 리소스를 제공하는
        // 웹서버의 URI의 주소(URL)
        // fetch를 통해서 비동기 Http request를 위 백엔드 서버에게 전송
        // 디폴트로 GET 메서드임!
        // fetch가 fullfilled 또는 rejected 상태의 프로미스를 리턴함.
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users?search=${encodeURIComponent(search)}`,
          { signal: controller.signal }, // AbortController와 fetch를 연결하는 “와이어” 역할
        );
        const data = await res.json();   // res의 Http Request의 바디는 ReadableStream 이므로 json으로 변환해야 함
        if (!ignore) {
          console.log("fetch success")
          setUsers(data);
        } else 
          console.log("ignore result of fetch!!!")
      } catch (e) {
        if (!ignore) {
          console.error('[FetchUsers] fetch error', e);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    load();

    // return이 리턴하는 콜백함수 역시, 의존성 배열에 따라 동작이 달라짐
    // : 현재 리턴 콜백은 search 값이 변경될 때 마다 useEffect에 전달한 콜백함수가 실행되기 전에 실행됨!
    return () => {
      ignore = true;
      controller.abort();
    };
  }, [search]);  // search는 props. 근데 이 props는 FetchTimerEventDemo의 state!!

  return (
    <div>
      <p style={{ fontSize: 13 }}>
        search 값이 바뀔 때마다 새로운 요청을 보내며, cleanup에서 <code>abort()</code>와{' '}
        <code>ignore</code> 플래그를 사용합니다.
      </p>
      {loading && <p style={{ fontSize: 13 }}>로딩 중...</p>}
      {!loading && (
        <ul style={{ fontSize: 13, paddingLeft: 18 }}>
          {users.map((u) => (
            <li key={u.id}>
              {u.name} ({u.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TimerDemo() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => t + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <p style={{ fontSize: 13 }}>
      ⏱ 타이머 tick: <strong>{tick}</strong>
    </p>
  );
}

function ResizeDemo() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(
    // 다음 콜백이 딱 한번(ResizeDemo 컴포넌트가 마운트될 때) 실행.
    () => {
      function handleResize() {
        setWidth(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);  // resize 이벤트 핸들러를 등록했음.
      return () => window.removeEventListener('resize', handleResize);
    }, 
    []);

  return (
    <p style={{ fontSize: 13 }}>
      📐 window.innerWidth: <strong>{width}</strong>
    </p>
  );
}

export default function FetchTimerEventDemo() {
  const [search, setSearch] = useState('');

  const onSearchChange = (e) => { 
    setSearch(e.target.value);
  }

  return (
    <div className="card">
      <div className="section-title">
        <span>7.</span>
        <h2>데이터 패칭, 타이머, 이벤트 리스너 패턴 🔧</h2>
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <span className="badge">데이터 패칭</span>
        <div className="button-row">
          <input
            style={{ padding: '4px 8px', borderRadius: 6, border: '1px solid #cbd5e1' }}
            value={search}
            onChange={onSearchChange}
            placeholder="검색어 (API에 그냥 전달)"
          />
        </div>
        <FetchUsers search={search} />
      </div>

      <div className="card">
        <span className="badge">타이머 (setInterval)</span>
        <TimerDemo />
      </div>

      <div className="card">
        <span className="badge">브라우저 이벤트 리스너 (resize)</span>
        <ResizeDemo />
      </div>
    </div>
  );
}
