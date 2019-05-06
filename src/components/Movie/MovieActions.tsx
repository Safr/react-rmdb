import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdFavorite, MdPlayArrow, MdAccessTime } from 'react-icons/md';
// STYLES
import { media, primaryTheme } from 'lib/styles';

interface Props {
  isAuthenticated: boolean;
  onFavoriteSelect: any;
  onFavoriteDeselect: any;
  favorited: any;
}

const renderFavHeart = (onFavoriteSelect, onFavoriteDeselect, isAuthenticated, favorited ) => {
  if (isAuthenticated) {
    return favorited ? (
      <MdFavorite
        onClick={onFavoriteDeselect as any}
        color={primaryTheme.colors.red}
        size="40px"
      />
    ) :
    (
      <MdFavorite
        onClick={onFavoriteSelect as any}
        color={ primaryTheme.colors.white}
        size="40px"
      />
    );
  }
  return (
    <Link to="/login">
      <MdFavorite
        onClick={() => {}}
        color={favorited ? primaryTheme.colors.red: primaryTheme.colors.white}
        size="40px"
      />
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

const MovieActions: React.FC<Props> = ({
  onFavoriteSelect,
  onFavoriteDeselect,
  isAuthenticated,
  favorited,
}) => {
  return (
    <Wrapper>
      {renderFavHeart(onFavoriteSelect,onFavoriteDeselect, isAuthenticated, favorited)}
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
    transition: all 0.4s ease;
    cursor: pointer;
    :hover {
      fill: ${({ theme }) => theme.colors.red};
      border-color: ${({ theme }) => theme.colors.red};
    }
  }
  ${media.phone`
    justify-self: center;
  `};
`;
