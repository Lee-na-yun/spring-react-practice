import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Home from '../components/home/Home';

const HomePage = () => {
  // http 요청(fetch)
  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    // 다운로드 받았다고 가정
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    setBoards([...data]);

    // 데이터세팅
    setUser({ id: 1, username: 'ssar' });

    // 빈배열은 한 번만 실행됨
  }, []);

  return (
      <Home
        boards={boards}
        setBoards={setBoards}
        number={number}
        setNumber={setNumber}
        user={user}
      />
  );
};

export default HomePage;
