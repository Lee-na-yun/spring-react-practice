import { useEffect, useState } from 'react';
import './App.css';

// map, filter, concat, spread, slice
function App() {

  const [data, setData] = useState(0);

  const download = ()=>{
    // 다운로드 받고 (통신을 통해서)
    let downloadData = 5; //가정
    // 받은 데이터 넣기
    setData(downloadData);
  }

  // 실행시점 :  (1) App()함수가 최초 실행될 때
  useEffect(()=>{
    console.log("useEffect 실행됨");
    download();
  },[ ]);

  return (
    <div>
      <h1>데이터 : {data}</h1>
      <button onClick={()=>{setData(data+1)}}>더하기</button>
    </div>
  );
}

export default App;
