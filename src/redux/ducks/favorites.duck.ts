import { Action, handleActions, createActions, Reducer } from 'redux-actions';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
// CONSTANTS
import { API_KEY, PATH_BASE, PATH_MOVIE } from 'lib/constants/searchConfig';
// HELPERS
import { firebaseApp } from 'lib/firebase';
import { getObjectIds } from 'lib/helpers';

const getMovieObject = async movieId => {
  const movie = await fetch(
    `${PATH_BASE}${PATH_MOVIE}/${movieId}?api_key=${API_KEY}&append_to_response=videos`,
  ).then(response => response.json());
  return { ...movie, favorited: true };
};

const initialState: IFavoritesState = {
  favoritedMovies: null,
  favoritedIds: null,
  error: false,
};

const actions = createActions<IFavoritesState>(
  'SET_FAVORITED_IDS_SUCCESS',
  'SET_FAVORITED_MOVIES_SUCCESS',
  'SET_FAVORITED_MOVIES_FAILURE',
);

const reducer: Reducer<IFavoritesState, IFavoritesState> = handleActions<
  IFavoritesState,
  IFavoritesState
>(
  {
    [actions.setFavoritedIdsSuccess.toString()]: (
      state: IFavoritesState,
      { payload: favoritedIds }: Action<IFavoritesState>,
    ) => ({
      ...state,
      favoritedIds,
    }),
    [actions.setFavoritedMoviesSuccess.toString()]: (
      state: IFavoritesState,
      { payload: favoritedMovies }: Action<IFavoritesState>,
    ) => ({
      ...state,
      favoritedMovies,
    }),
  },
  initialState,
);

const effects = {
  getAllMoviesFromList: () => async (dispatch: Dispatch): Promise<void> => {
    let favoriteList;
    //   const userUid = user.uid;
    // @ts-ignore
    const userUid: string = firebaseApp.auth().currentUser.uid;

    if (userUid) {
      await firebaseApp
        .database()
        .ref(`${userUid}/favorites`)
        .once('value')
        .then(snapshot => {
          favoriteList = snapshot.val();
        });
      if (favoriteList) {
        const moviesIdsArr = getObjectIds(favoriteList);
        const promises = moviesIdsArr.map(item => {
          const movie = getMovieObject(item);
          return movie;
        });
        Promise.all(promises).then(userListMovies => {
          dispatch(actions.setFavoritedMoviesSuccess(userListMovies));
        });
      }
    }
  },
  addToFavoritesList: (selectedMovie: number) => async (
    dispatch: Dispatch<any>, getState: () => IRootState,
  ): Promise<void> => {
    // const userUid = user.uid;
    const { favoritedIds } = getState().favorites;
    console.log('favoritedIds', favoritedIds);
    // @ts-ignore
    const userUid: string = firebaseApp.auth().currentUser.uid;
    await firebaseApp
      .database()
      .ref(userUid)
      .child('favorites')
      .update({
        [selectedMovie]: selectedMovie,
      });
      await dispatch(actions.setFavoritedIdsSuccess([...favoritedIds, selectedMovie]));
      await dispatch(effects.getAllMoviesFromList());
  },
  removeFromFavoritesList: selectedMovie => async (
    dispatch: Dispatch<any> , getState: () => IRootState,
  ): Promise<void> => {
    // const userUid = user.uid;
    const { favoritedIds } = getState().favorites;

    // @ts-ignore
    const userUid: string = firebaseApp.auth().currentUser.uid;

    await firebaseApp
      .database()
      .ref(userUid)
      .child('favorites')
      .child(selectedMovie)
      .remove();
      await dispatch(actions.setFavoritedIdsSuccess(favoritedIds.filter(id => id !== selectedMovie)));
    await dispatch(effects.getAllMoviesFromList());
  },
};

const getState = state => state.favorites;
const cs = cb =>
  createSelector(
    [getState],
    cb,
  );

const selectors = {
  getFavoritedIds: cs(s => s.favoritedIds),
  getFavoritedMovies: cs(s => s.favoritedMovies),
  getErrors: cs(s => s.error),
  getLoading: cs(s => s.loading),
};

export { initialState as state, reducer, actions, selectors, effects };
