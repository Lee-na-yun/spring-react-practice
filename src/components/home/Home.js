import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

// Function 방식
const Home = (props) => {
  // 구조분할 할당
  const { boards, setBoards, number, setNumber, user } = props;

  return (
    <div>
      <Button variant="primary">Primary</Button>{' '}
      <h1>홈: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>번호증가</button>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
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
