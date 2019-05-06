import * as React from 'react';
import styled from 'styled-components';
// STYLES
import { media } from 'lib/styles';
// HOOKS
import { useShowMore } from 'lib/hooks';
// COMPONENTS
import Meter from 'components/UI/Meter';
import VoteBadge from 'components/UI/VoteBadge';
import MovieInfoBar from 'components/Movie/MovieInfoBar';
// import MovieActions from 'components/Movie/MovieActions';
import ShowMore from 'components/UI/ShowMore';

interface Props {
  movie: any;
}

const MovieInfo: React.FC<Props> = ({ movie }) => {
  const { isOpen, toggleShowMore } = useShowMore(false);
  return (
    <Wrapper>
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt=""
      />
      <Content>
        <h1>{movie.title}</h1>
        {/* <MovieActions /> */}
        <h2 className="movie-overview-title">Overview</h2>
        <p className="movie-overview">{movie.overview}</p>

        <Rating>
          <h2>IMDB RATING</h2>
          <VoteBadge voteAverage={movie.vote_average} right="0px" top="0px" />
          <Meter
            min="0"
            max="100"
            optimum="100"
            low="40"
            high="70"
            value={movie.vote_average * 10}
          />
        </Rating>
        <ShowMore
          isOpen={isOpen}
          toggleShowMore={toggleShowMore}
          title="Show additional info"
        />
        {isOpen && (
          <MovieInfoBar
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
          />
        )}
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-gap: 20px;
  ${media.phone`
  grid-template-columns: 1fr;

    img {
      justify-self: center;
    }
  `};

  h2 {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

const Content = styled.div`
  display: grid;
  ${media.phone`
    grid-gap: 20px;
    > div:first-child {
      justify-self: center;
    }
    h1 {
        text-align: center;
    };
  `};
`;

const Rating = styled.div`
  position: relative;
`;
