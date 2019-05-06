import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
// DUCKS
import { selectors as authSelectors } from 'redux/ducks/auth.duck';
import { effects as favoritesEffects, selectors as favoritesSelectors } from 'redux/ducks/favorites.duck';


// COMPONENTS
import List from 'components/List';

// TYPES
export interface Props {
  getAllMoviesFromList: () => Promise<void>;
  favoritedMovies: any;
}

const { useEffect } = React;

const Favorites: React.FC<Props> = ({ getAllMoviesFromList, favoritedMovies }) => {
  // let firebaseUserLists;
  // const getMovieObject = useCallback(async movieId => {
  //   const movie = await fetch(
  //     `${PATH_BASE}${PATH_MOVIE}/${movieId}?api_key=${API_KEY}&append_to_response=videos`,
  //   ).then(response => response.json());
  //   return { ...movie, favorited: true };
  // }, []);

  // const getMoviesIds = obj => Object.keys(obj).map(key => obj[key]);

  // const getAllMoviesFromList = useCallback(
  //   async () => {
  //     const userUid = user.uid;

  //     if (userUid) {
  //       await firebaseApp
  //         .database()
  //         .ref(`${userUid}/favorites`)
  //         .once('value')
  //         .then(snapshot => {
  //           firebaseUserLists = snapshot.val();
  //         });
  //       if (firebaseUserLists) {
  //         const moviesIdsArr = getMoviesIds(firebaseUserLists);
  //         const promises = moviesIdsArr.map(item => {
  //           const movie = getMovieObject(item);
  //           return movie;
  //         });
  //         Promise.all(promises).then(userListMovies => {
  //           firebaseUserLists = userListMovies;
  //         });
  //       }
  //     }
  //   },
  //   [getMovieObject, user.uid, firebaseUserLists],
  // );

  useEffect(() => {
    getAllMoviesFromList();
  }, [getAllMoviesFromList]);
    // console.log('firebaseUserLists', firebaseUserLists);
  return (
    <Content>
      <h2>Favorites</h2>
      {favoritedMovies && <List list={favoritedMovies} />}
      {!favoritedMovies && <h3>Select your favorite movie</h3>}
    </Content>
  );
};

export default compose(
  connect(
    state => ({
      favoritedMovies: favoritesSelectors.getFavoritedMovies(state),
      user: authSelectors.getUser(state),
    }),
    {...favoritesEffects},
  ),
  React.memo,
)(Favorites);

const Content = styled.div`
  max-width: 1200px;
  padding: 30px 25px 40px 30px;
  position: relative;
`;
