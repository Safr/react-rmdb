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
import MovieInfo from 'components/Movie/MovieInfo';
import MovieInfoBar from 'components/Movie/MovieInfoBar';

interface Props {
  match: any;
  movie: any;
  fetchMovie: (id: number) => Promise<void>;
}

const { useEffect } = React;

const Movie: React.FC<Props> = ({ fetchMovie, match, movie }) => {
  useEffect(() => {
    fetchMovie(match.params.id);
  }, [fetchMovie, match.params.id]);
  console.log('movie', movie);
  return (
    <Content>
      {movie && (
        <Wrapper>
          <MovieInfo movie={movie} />
          <MovieInfoBar
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
          />
        </Wrapper>
      )}
    </Content>
  );
};

export default compose(
  connect(
    state => ({
      movie: moviesSelectors.getMovie(state),
      isLoading: moviesSelectors.getLoading(state),
    }),
    { ...moviesEffects },
  ),
  React.memo,
)(Movie);

const Content = styled.div`
  max-width: 1200px;
  padding: 30px 25px 40px 30px;
  position: relative;
`;

const Wrapper = styled.div`
  display: grid;
  /* grid-auto-flow: column;
  grid-gap: 20px; */
`;
