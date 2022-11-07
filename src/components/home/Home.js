import React from 'react';

// Function 방식
const Home = (props) => {
  console.log(1, props);
  const boards = props.boards;
  console.log(2, boards);
  return (
    <div>
      <h1>홈페이지입니다.</h1>
    </div>
  );
};

export default Home;
