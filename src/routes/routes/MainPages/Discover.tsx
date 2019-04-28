import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
// STYLES
import { media } from 'lib/styles';
// HOCS
import { withAjaxLoadMore } from 'components/HOC';
// DUCKS
import {
  effects as moviesEffects,
  selectors as moviesSelectors,
} from 'redux/ducks/movies.duck';

// COMPONENTS
import List from 'components/List';
import Sorting from 'components/Sorting';
import Spinner from 'components/UI/Spinner';

const { useEffect } = React;

// TYPES
export interface Props {
  fetchMovies: (page: number) => Promise<void>;
  movies: any;
  page: number;
  isLoading: boolean;
}

const DiscoverPages: React.FC<Props> = ({ movies, fetchMovies, isLoading, page }) => {
  useEffect(() => {
    fetchMovies(page);
  }, [fetchMovies, page]);
  return (
    <Content>
      <h2>Discover</h2>
      <SortingBox>
        <h3>— browse movies by year, ratings and duration.</h3>
        <Sorting />
      </SortingBox>

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
      movies: moviesSelectors.getMovies(state),
      isLoading: moviesSelectors.getLoading(state),
    }),
    { ...moviesEffects },
  ),
  withAjaxLoadMore,
  React.memo,
)(DiscoverPages);

const Content = styled.div`
  padding: 30px 25px 40px 30px;
  position: relative;

  h3 {
    color: rgba(255, 255, 255, 0.5);
    margin-top: 0;
    font-weight: normal;
    font-size: 22px;
  }
`;

const SortingBox = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-content: center;
  margin-bottom: 20px;
  ${media.phone`
    grid-template-columns: 1fr;
    grid-row-gap
  `};
`;

const Loading = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
