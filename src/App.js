import './App.css';
import styled from 'styled-components';

function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  return (
    <div>
      <Title>안녕</Title>
      <div>헬로</div>
    </div>
  );
}

export default App;
