import React from 'react';
import styled from 'styled-components';

const LoginNav = styled.div`
  border: 1px solid blue;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
`;

const Login = () => {
  return (
    <LoginNav>
      <li>로그인</li>
      <li>회원가입</li>
    </LoginNav>
  );
};

export default Login;
