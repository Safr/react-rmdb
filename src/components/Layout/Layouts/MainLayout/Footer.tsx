import * as React from 'react';
import styled from 'styled-components';
// STYLES
import { media } from 'lib/styles';
// COMPONENTS
import Copyright from 'components/Copyright';


const Footer = () => {
  return (
    <Wrapper>
      <Copyright />
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: auto; /* Stick to bottom of sidebar */
  height: 80px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  background-color: #191c1f;

  ${media.phone`
    display: none;
  `};

  
`;
