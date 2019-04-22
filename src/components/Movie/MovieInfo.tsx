import React from 'react';
import styled from 'styled-components';
import Meter from 'components/UI/Meter';

interface Props {
  movie: any;
}

const MovieInfo: React.FC<Props> = ({ movie }) => (
  <Wrapper>
    <img
      className="movie-poster"
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt=""
    />
    <div className="rmdb-movieinfo-text">
      <h1>{movie.title}</h1>
      <h3 className="movie-overview-title">Overview</h3>
      <p className="movie-overview">{movie.overview}</p>
      <h3>IMDB RATING</h3>
      <div className="rmdb-rating">
        <Meter
          min="0"
          max="100"
          optimum="100"
          low="40"
          high="70"
          value={movie.vote_average * 10}
        />
        <p className="rmdb-score">{movie.vote_average}</p>
      </div>
      {/* {directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
      {directors.map((element, i) => {
        return (
          <p key={i} className="rmdb-director">
            {element.name}
          </p>
        );
      })} */}
    </div>
  </Wrapper>
);

export default MovieInfo;

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
`;
