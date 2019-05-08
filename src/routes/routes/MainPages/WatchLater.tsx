import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
// DUCKS
import {
  effects as watchLaterEffects,
  selectors as watchLaterSelectors,
} from 'redux/ducks/watchLater.duck';
// COMPONENTS
import List from 'components/List';

// TYPES
export interface Props {
  getAllWatchLaterMoviesFromList: () => Promise<void>;
  watchLaterMovies: any;
}

const { useEffect } = React;

const WatchLater: React.FC<Props> = ({
  getAllWatchLaterMoviesFromList,
  watchLaterMovies,
}) => {
  useEffect(() => {
    getAllWatchLaterMoviesFromList();
  }, [getAllWatchLaterMoviesFromList]);
  return (
    <Content>
      <h2>Watch Later</h2>
      {watchLaterMovies && <List list={watchLaterMovies} />}
      {!watchLaterMovies && <h3>Select your watch later movie</h3>}
    </Content>
  );
};

export default compose(
  connect(
    state => ({
      watchLaterMovies: watchLaterSelectors.getWatchLaterMovies(state),
    }),
    { ...watchLaterEffects },
  ),
  React.memo,
)(WatchLater);

const Content = styled.div`
  max-width: 1200px;
  padding: 30px 25px 40px 30px;
  position: relative;
`;
