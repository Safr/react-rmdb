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
// import Button from '../../components/Button';

const { useEffect } = React;

// TYPES
export interface Props {
  fetchPopularMovies: () => Promise<void>;
  movies: any;
}

const PopularPages: React.FC<Props> = ({ movies, fetchPopularMovies }) => {
  useEffect(() => {
    fetchPopularMovies();
  }, [fetchPopularMovies]);
  return (
    <Content>
      <h2>Popular</h2>
      {movies && <List list={movies.results} />}

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
        <Button
          className="button"
          onClick={() => this.getMovies(this.props.section, page + 1)}
          text="Load more"
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
  React.memo,
)(PopularPages);

const Content = styled.div`
  padding: 30px 25px 40px 30px;
  position: relative;
`;
