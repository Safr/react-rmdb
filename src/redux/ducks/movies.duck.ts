import { Action, handleActions, createActions, Reducer } from 'redux-actions';
import { createSelector } from 'reselect';
import { Dispatch } from 'redux';
// API
import api from 'lib/api';
import { DEFAULT_PAGE } from 'lib/constants/searchConfig';

const initialState: IMoviesState = {
  movies: null,
  popularMovies: null,
  topRatedMovies: null,
  favorites: [],
  watchLater: null,
  loading: false,
  error: false,
};

const actions = createActions<IMoviesState>(
  'FETCH_MOVIES_REQUEST',
  'FETCH_MOVIES_SUCCESS',
  'FETCH_MOVIES_FAILURE',
  'FETCH_POPULAR_MOVIES_REQUEST',
  'FETCH_POPULAR_MOVIES_SUCCESS',
  'FETCH_POPULAR_MOVIES_FAILURE',
  'FETCH_TOP_RATED_MOVIES_REQUEST',
  'FETCH_TOP_RATED_MOVIES_SUCCESS',
  'FETCH_TOP_RATED_MOVIES_FAILURE',
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
    [actions.fetchPopularMoviesRequest.toString()]: (state: IMoviesState) => ({
      ...state,
      loading: true,
    }),
    [actions.fetchPopularMoviesSuccess.toString()]: (
      state: IMoviesState,
      { payload: popularMovies }: Action<IMoviesState>,
    ) => ({
      ...state,
      popularMovies,
      loading: false,
    }),
    [actions.fetchTopRatedMoviesRequest.toString()]: (state: IMoviesState) => ({
      ...state,
      loading: true,
    }),
    [actions.fetchTopRatedMoviesSuccess.toString()]: (
      state: IMoviesState,
      { payload: topRatedMovies }: Action<IMoviesState>,
    ) => ({
      ...state,
      topRatedMovies,
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
  fetchPopularMovies: () => async (dispatch: Dispatch): Promise<void> => {
    try {
      await dispatch(actions.fetchPopularMoviesRequest());
      const data = await api.getPopularMovies(DEFAULT_PAGE);
      await dispatch(actions.fetchPopularMoviesSuccess(data));
      // return true;
    } catch (error) {
      dispatch(actions.fetchPopularMoviesFailure(error.message));
      return new Promise(resolve => resolve(error.message));
    }
  },
  fetchTopRatedMovies: () => async (dispatch: Dispatch): Promise<void> => {
    try {
      await dispatch(actions.fetchTopRatedMoviesRequest());
      const data = await api.getTopRatedMovies(DEFAULT_PAGE);
      await dispatch(actions.fetchTopRatedMoviesSuccess(data));
      // return true;
    } catch (error) {
      dispatch(actions.fetchTopRatedMoviesFailure(error.message));
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
  getPopularMovies: cs(s => s.popularMovies),
  getTopRatedMovies: cs(s => s.topRatedMovies),
  getErrors: cs(s => s.error),
  getLoading: cs(s => s.loading),
};

export { initialState as state, reducer, actions, selectors, effects };
