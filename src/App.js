import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';

let a = 10; //변수
const b = 20; //상수

function App() {
  let c;
  console.log(1, c);

  const mystyle = {
    color: 'red',
  };

  // let number = 1; // 상태 값 아님
  const [number, setNumber] = useState(1);

  const add = () => {
    //number++;
    setNumber(number + 1); // ++은 자기한테 다시 값을 넣는거라 안됨
    console.log('add', number);
  };

  return (
    <div>
      {/* <div style={mystyle}>안녕{a === 10 ? '10입니다.' : '10이 아닙니다.'}</div>
      <h1 className="box-style">해당태그{b === 20 && '20입니다.'}</h1> */}
      <h1>숫자 : {number}</h1>
      <button onClick={add}>더하기</button>
      <Sub/>
    </div>
  );
}

export default App;
