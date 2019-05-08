import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
// DUCKS
import {
  effects as favoritesEffects,
  selectors as favoritesSelectors,
} from 'redux/ducks/favorites.duck';
// COMPONENTS
import List from 'components/List';

// TYPES
export interface Props {
  getAllFavoritedMoviesFromList: () => Promise<void>;
  favoritedMovies: any;
}

const { useEffect } = React;

const Favorites: React.FC<Props> = ({
  getAllFavoritedMoviesFromList,
  favoritedMovies,
}) => {
  useEffect(() => {
    getAllFavoritedMoviesFromList();
  }, [getAllFavoritedMoviesFromList]);
  return (
    <Content>
      <h2>Favorites</h2>
      {favoritedMovies && <List list={favoritedMovies} />}
      {!favoritedMovies && <h3>Select your favorite movie</h3>}
    </Content>
  );
};

export default compose(
  connect(
    state => ({
      favoritedMovies: favoritesSelectors.getFavoritedMovies(state),
    }),
    { ...favoritesEffects },
  ),
  React.memo,
)(Favorites);

const Content = styled.div`
  max-width: 1200px;
  padding: 30px 25px 40px 30px;
  position: relative;
`;
