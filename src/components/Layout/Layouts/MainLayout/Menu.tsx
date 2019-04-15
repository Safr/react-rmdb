import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  userName: string;
}

const Menu: React.FC<Props> = ({ isOpen, userName }) => {
  return (
    <Wrapper>
      <Span>{userName}</Span>
      <Ul>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/watch-later">Watch Later</Link>
        </li>
        <li>
          <Logout to="/logout">Logout</Logout>
        </li>
      </Ul>
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled.div`
  position: absolute;
  top: 100%;
  right: -500%;
  z-index: 1;
  text-align: right;
  min-width: 250px;
  background-color: #cc343f;
  transition: right 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
`;

const Span = styled.span`
  position: relative;
  font-size: 10px;
  text-transform: uppercase;
  display: block;
  color: #fff;
  background-color: #191c1f;
  padding: 10px;

  ::before {
    content: '';
    position: absolute;
    top: -6px;
    right: 58px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #191c1f;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  li a {
    font-size: 14px;
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 10px 25px;
    transition: all 0.3s ease;

    :hover {
      background-color: #b72e38;
    }
  }
`;

const Logout = styled(Link)`
  background-color: #b72e38;
  border-top: 1px solid #a82931;
`;
