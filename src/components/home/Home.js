import React from 'react';
import styled from 'styled-components';

// Function 방식
const Home = (props) => {
  // 구조분할 할당
  const { boards, setBoards, number, setNumber, user } = props;

  const StyledDeleteButton = styled.button`
    color: ${() => (user.username === 'ssar' ? 'blue' : 'red')};
  `;

  return (
    <div>
      <h1>홈: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>번호증가</button>
      <StyledDeleteButton onClick={() => setBoards([])}>
        전체 삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          {board.title} 내용:{board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
