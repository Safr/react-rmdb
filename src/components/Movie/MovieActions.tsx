import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdFavorite, MdPlayArrow, MdAccessTime } from 'react-icons/md';
// STYLES
import { primaryTheme } from 'lib/styles';

const renderFavHeart = () => {
  return (
    <Link to="/login">
      <MdFavorite color={primaryTheme.colors.white} size="40px" />
    </Link>
  );
};

const renderWatchLaterClock = () => {
  return (
    <Link to="/login">
      <MdAccessTime color={primaryTheme.colors.white} size="40px" />
    </Link>
  );
};

const renderPlay = () => {
  return (
    <Link to="/login">
      <MdPlayArrow color={primaryTheme.colors.white} size="40px" />
    </Link>
  );
};

const MovieActions = () => {
  return (
    <Wrapper>
      {renderFavHeart()}
      {renderPlay()}
      {renderWatchLaterClock()}
    </Wrapper>
  );
};

export default MovieActions;

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  width: 200px;

  svg {
    padding: 10px;
    border: 2px solid white;
    border-radius: 50%;
    position: relative;
    transition: border 0.4s ease;
  }
`;
