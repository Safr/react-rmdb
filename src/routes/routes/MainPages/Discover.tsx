import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
// STYLES
import { media } from 'lib/styles';
// DUCKS
import { selectors as moviesSelectors } from 'redux/ducks/movies.duck';

// COMPONENTS
import List from 'components/List';
import Sorting from 'components/Sorting';
// import Button from '../../components/Button';

// TYPES
export interface Props {
  movies: any;
}

const DiscoverPages: React.FC<Props> = ({ movies }) => {
  return (
    <Content>
      <h2>Discover</h2>
      <SortingBox>
        <h3>— browse movies by year, ratings and duration.</h3>
        <Sorting />
      </SortingBox>

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
  connect(state => ({
    movies: moviesSelectors.getMovies(state),
    isLoading: moviesSelectors.getLoading(state),
  })),
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
  `};
`;
