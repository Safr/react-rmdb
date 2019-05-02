import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// COMPONENTS
import MovieActions from 'components/Movie/MovieActions';
import VoteBadge from 'components/UI/VoteBadge';

interface Props {
  id: number;
  poster_path: string;
  title: any;
  vote_average: number;
}

const MovieItem: React.FC<Props> = props => {
  const { id, poster_path, title, vote_average } = props;
  return (
    <Wrapper>
      <VoteBadge voteAverage={vote_average} right="-20px" top="15px" />
      <ImageBox>
        {poster_path ? (
          <>
            <MovieActions />

            <ImageLink
              className="list__movie-image-link"
              to={`/movie/${id}-${title}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}
                alt={title}
              />
            </ImageLink>
          </>
        ) : (
          <>
            <MovieActions />
            <ImageLink to={`/movie/${id}`}>
              <div className="list__movie-no_image_holder" />
            </ImageLink>
          </>
        )}
      </ImageBox>
      <h3>{title}</h3>
    </Wrapper>
  );
};

export default MovieItem;

const Wrapper = styled.li`
  position: relative;
  width: 185px;
  /* margin-right: 40px; */
  transition: opacity 0.3s ease;

  h3 {
    display: block;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
`;

const ImageBox = styled.figure`
  height: 278px;

  margin: 0 auto 15px;
  position: relative;
  box-shadow: 3px 4px 7px 2px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  > div {
    position: absolute;
  bottom: -40px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: bottom 0.4s ease;
  z-index: 1;

  svg {
    border: none;
  }
  }

  :hover > div {
    bottom: 0;
  }
`;

const ImageLink = styled(Link)`
  /* width: 100%;
  height: 100%;
  display: block; */
`;