import { Action, handleActions, createActions, Reducer } from 'redux-actions';
import { createSelector } from 'reselect';
import { Dispatch } from 'redux';
// API
import api from 'lib/api';
import { DEFAULT_PAGE } from 'lib/constants/searchConfig';

const initialState: IMoviesState = {
  movies: null,
  favorites: [],
  watchLater: null,
  loading: false,
  error: false,
};

const actions = createActions<IMoviesState>(
  'FETCH_MOVIES_REQUEST',
  'FETCH_MOVIES_SUCCESS',
  'FETCH_MOVIES_FAILURE',
);

const reducer: Reducer<IMoviesState, IMoviesState> = handleActions<
  IMoviesState,
  IMoviesState
>(
  {
    [actions.fetchMoviesRequest.toString()]: (state: IMoviesState) => ({
      ...state,
      loading: true,
    }),
    [actions.fetchMoviesSuccess.toString()]: (
      state: IMoviesState,
      { payload: movies }: Action<IMoviesState>,
    ) => ({
      ...state,
      movies,
      loading: false,
    }),
  },
  initialState,
);

const effects = {
  fetchMovies: () => async (dispatch: Dispatch): Promise<void> => {
    try {
      await dispatch(actions.fetchMoviesRequest());
      const data = await api.getMovies(DEFAULT_PAGE);
      await dispatch(actions.fetchMoviesSuccess(data));
      // return true;
    } catch (error) {
      dispatch(actions.fetchMoviesFailure(error.message));
      return new Promise(resolve => resolve(error.message));
    }
  },
};

const getState = state => state.movies;
const cs = cb =>
  createSelector(
    [getState],
    cb,
  );

const selectors = {
  getMovies: cs(s => s.movies),
  getErrors: cs(s => s.error),
};

export { initialState as state, reducer, actions, selectors, effects };
