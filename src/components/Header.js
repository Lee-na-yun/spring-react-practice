import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderMenu = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

const HeaderLink = styled(Link)`
  color: red;
`;

const Header = () => {
  return (
    <div>
      <HeaderMenu backgroundColor="blue">
        <ul>
          <li>
            <HeaderLink to="/">홈</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/login/10">로그인</HeaderLink>
          </li>
        </ul>
      </HeaderMenu>

      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
