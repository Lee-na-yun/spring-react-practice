import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.div`
  border: 1px solid #ccc;
`;

const FooterP = styled.p`
  color: #333;
  font-size: small;
`;

const Footer = () => {
  return (
    <FooterBox>
      <FooterP>주소 : 부산시 부산진구</FooterP>
      <FooterP>전화번호 : 010-0000-0000</FooterP>
    </FooterBox>
  );
};

export default Footer;
