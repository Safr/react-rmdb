import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
// import { useSetGlobalEventHandler } from 'lib/hooks';
// HOCS
import { withAjaxLoadMore } from 'components/HOC';
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
import Spinner from 'components/UI/Spinner';

// import { useLoadMore } from 'lib/hooks';

const { useEffect } = React;

// TYPES
export interface Props {
  fetchPopularMovies: (page: number) => Promise<void>;
  movies: any;
  page: number;
  isLoading: boolean;
}

const PopularPages: React.FC<Props> = ({
  movies,
  fetchPopularMovies,
  isLoading,
  page,
  ...rest
}) => {
  // const currentPage = movies ? movies.page : 1;

  useEffect(() => {
    fetchPopularMovies(page);
  }, [fetchPopularMovies, page]);
  return (
    <Content>
      <h2>Popular</h2>
      {movies && <List list={movies.results} {...rest} />}
      {!isLoading && (
      <Loading>

        <Spinner />
      </Loading>
      )}

      {/* {results && (
          <List
            list={results}
            addToList={(selectedMovie, userList) =>
              this.props.addToList(selectedMovie, userList)
            }
            removeFromList={(selectedMovie, userList) =>
              this.props.removeFromList(selectedMovie, userList)
            }
            authenticated={this.props.authenticated}
            favorites={this.props.favorites}
            watchLater={this.props.watchLater}
          />
        )} */}
      {/* 
        /> */}
    </Content>
  );
};

export default compose(
  connect(
    state => ({
      movies: moviesSelectors.getPopularMovies(state),
      isLoading: moviesSelectors.getLoading(state),
    }),
    { ...moviesEffects },
  ),
  withAjaxLoadMore,
  React.memo,
)(PopularPages);

const Content = styled.div`
  padding: 30px 25px 40px 30px;
  position: relative;
`;

const Loading = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;