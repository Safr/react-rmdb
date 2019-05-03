import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
// HOCS
import { withAjaxLoadMore } from 'components/HOC';
// DUCKS
import {
  effects as moviesEffects,
  selectors as moviesSelectors,
} from 'redux/ducks/movies.duck';
// COMPONENTS
import List from 'components/List';
import Spinner from 'components/UI/Spinner';

const { useEffect } = React;

// TYPES
export interface Props {
  fetchTopRatedMovies: (page: number) => Promise<void>;
  movies: any;
  page: number;
  isLoading: boolean;
}

const TopRatedPages: React.FC<Props> = ({
  movies,
  fetchTopRatedMovies,
  page,
  isLoading,
}) => {
  useEffect(() => {
    fetchTopRatedMovies(page);
  }, [fetchTopRatedMovies, page]);
  return (
    <Content>
      <h2>Top Rated</h2>
      {movies && <List list={movies.results} />}
      {isLoading && (
        <Loading>
          <Spinner />
        </Loading>
      )}
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
  withAjaxLoadMore,
  React.memo,
)(TopRatedPages);

const Content = styled.div`
  max-width: 1200px;
  padding: 30px 25px 40px 30px;
  position: relative;
`;

const Loading = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
