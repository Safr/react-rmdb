import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// COMPONENTS
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
      <VoteBadge voteAverage={vote_average} />
      <ImageBox>
        {poster_path ? (
          <div>
            <MovieActions>
              {/* {this.renderFavHeart()}

              <svg
                width="10"
                height="15"
                className="list__movie-action action__playtrailer"
                viewBox="0 0 10 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.013.135L9.7 7.5.012 14.865" />
              </svg>

              {this.renderWatchLaterClock()} */}
            </MovieActions>

            <ImageLink
              className="list__movie-image-link"
              to="#"
              // to={`/movie/${id}-${this.titleURL(title)}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}
                alt={title}
              />
            </ImageLink>
          </div>
        ) : (
          <div>
            <div className="list__movie-actions">
              {/* {this.renderFavButton(id)} */}
              <svg
                width="10"
                height="15"
                className="list__movie-action action__playtrailer"
                viewBox="0 0 10 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.013.135L9.7 7.5.012 14.865" />
              </svg>
            </div>
            <ImageLink to={`/movie/${id}`}>
              <div className="list__movie-no_image_holder" />
            </ImageLink>
          </div>
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
    color: #fff;
  }
`;

const ImageBox = styled.figure`
  height: 278px;

  margin: 0 auto 15px;
  position: relative;
  box-shadow: 3px 4px 7px 2px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

const ImageLink = styled(Link)`
  /* width: 100%;
  height: 100%;
  display: block; */
`;

const MovieActions = styled.div`
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
`;
