import React from 'react';

// Function 방식
const Home = (props) => {
  // 구조분할 할당
  const { boards, setBoards } = props;

  return (
    <div>
      <h1>홈페이지입니다.</h1>
      <button onClick={() => setBoards([])}>전체 삭제</button>
      {boards.map((board) => (
        <h3>
          {board.title} 내용:{board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
