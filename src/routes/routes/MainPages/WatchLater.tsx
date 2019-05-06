import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
// DUCKS
import {
  effects as moviesEffects,
  selectors as moviesSelectors,
} from 'redux/ducks/movies.duck';
// COMPONENTS

// TYPES
export interface Props {
  fetchTopRatedMovies: (page: number) => Promise<void>;
  movies: any;
  page: number;
  isLoading: boolean;
}

const WatchLater: React.FC<Props> = ({
  movies,
  fetchTopRatedMovies,
  page,
  isLoading,
}) => {
  return (
    <Content>
      <h2>Watch Later</h2>
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
)(WatchLater);

const Content = styled.div`
  max-width: 1200px;
  padding: 30px 25px 40px 30px;
  position: relative;
`;
