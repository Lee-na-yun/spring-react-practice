import { useState } from 'react';
import './App.css';

function App() {
  // 다운로드 받음 -> user데이터를 상태로 관리하고 싶음
  console.log('App 실행됨');

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '이순신' },
  ];

  const [users, setUsers] = useState(sample);

  const download = () => {
    // 기존 데이터 세팅
    
    // 다운로드 버튼 클릭하면 users에 값 넣기
    setUsers(sample); // 여기에 sample을 넣을 수 없음
  };

  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((users) => (
        <h1>
          {users.id},{users.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
