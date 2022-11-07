import React from 'react';
import styled from 'styled-components';

const HeaderMenu = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

const Header = () => {
  return (
    <HeaderMenu backgroundColor="blue">
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </HeaderMenu>
  );
};

export default Header;
