import * as React from 'react';
import { connect } from 'react-redux';
// import { RouteComponentProps } from 'react-router-dom';
// import {  match } from 'react-router-dom';
import { compose } from 'redux';
import styled from 'styled-components';
// DUCKS
import {
  actions as movieActions,
  effects as moviesEffects,
  selectors as moviesSelectors,
} from 'redux/ducks/movies.duck';
// COMPONENTS
import MovieInfo from 'components/Movie/MovieInfo';
import Spinner from 'components/UI/Spinner';


// interface TParams { id?: string };

interface Props {
  isLoading: boolean;
  //  match: RouteComponentProps<TParams>;
  // match: match<TParams>;
  match: any;
  movie: any;
  clearMovie: () => void;
  fetchMovie: (id: number) => Promise<void>;
}

const { useEffect } = React;

const Movie: React.FC<Props> = ({ clearMovie, fetchMovie, isLoading, match, movie }) => {
  useEffect(() => {
    return () => {
      clearMovie();
    };
  }, []);
  useEffect(() => {
    fetchMovie(match.params.id);
  }, [fetchMovie, match.params.id]);
  return (
    <Content>
      {isLoading || !movie ? (
        <Loading>
          <Spinner />
        </Loading>
      ): (
        <Wrapper>
        <MovieInfo movie={movie} />
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
    { ...movieActions, ...moviesEffects },
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

const Loading = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
