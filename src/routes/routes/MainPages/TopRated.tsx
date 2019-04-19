import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
// DUCKS
import {
  effects as moviesEffects,
  selectors as moviesSelectors,
} from 'redux/ducks/movies.duck';
// CONSTANTS
// import {
//   API_KEY,
//   PATH_BASE,
//   PATH_MOVIE,
//   DEFAULT_PAGE,
//   PATH_PAGE,
// } from '../../api';
// COMPONENTS
import List from 'components/List';

const { useEffect } = React;

// TYPES
export interface Props {
  fetchTopRatedMovies: () => Promise<void>;
  movies: any;
}

const TopRatedPages: React.FC<Props> = ({ movies, fetchTopRatedMovies }) => {
  useEffect(() => {
    fetchTopRatedMovies();
  }, [fetchTopRatedMovies]);
  return (
    <Content>
      <h2>Top Rated</h2>
      {movies && <List list={movies.results} />}
    </Content>
  );
};

export default compose(
  connect(
    state => ({
      movies: moviesSelectors.getTopRatedMovies(state),
      isLoading: moviesSelectors.getLoading(state),
    }),
    { ...moviesEffects },
  ),
  React.memo,
)(TopRatedPages);

const Content = styled.div`
  padding: 30px 25px 40px 30px;
  position: relative;
`;
