import { Action, handleActions, createActions, Reducer } from 'redux-actions';
import { createSelector } from 'reselect';
import { Dispatch } from 'redux';
// API
import api from 'lib/api';
// import { DEFAULT_PAGE } from 'lib/constants/searchConfig';

const initialState: IMoviesState = {
  results: null,
  movies: null,
  popularMovies: null,
  soonMovies: null,
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
  'FETCH_SOON_MOVIES_REQUEST',
  'FETCH_SOON_MOVIES_SUCCESS',
  'FETCH_SOON_MOVIES_FAILURE',
  'FETCH_TOP_RATED_MOVIES_REQUEST',
  'FETCH_TOP_RATED_MOVIES_SUCCESS',
  'FETCH_TOP_RATED_MOVIES_FAILURE',
  'SET_POPULAR_MOVIES_PAGE',
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
      action: Action<IMoviesState>,
    ) => {
      // const { results } = action.payload;
      const oldResults: any[] = state.popularMovies
        ? state.popularMovies.results
        : [];
      return {
        ...state,
        popularMovies: {
          ...action.payload,
          results: [...oldResults, ...action.payload.results],
        },
        loading: false,
      };
    },
    [actions.fetchSoonMoviesRequest.toString()]: (state: IMoviesState) => ({
      ...state,
      loading: true,
    }),
    [actions.fetchSoonMoviesSuccess.toString()]: (
      state: IMoviesState,
      { payload: soonMovies }: Action<IMoviesState>,
    ) => ({
      ...state,
      soonMovies,
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
    [actions.setPopularMoviesPage.toString()]: (state: IMoviesState) => {
      return {
        ...state,
        popularMovies: {
          ...state.popularMovies,
          page: state.popularMovies.page + 1,
        },
        loading: false,
      };
    },
  },
  initialState,
);

// interface IEffects {
//   fetchMovies: (page: number) => Promise<void>;
//   fetchPopularMovies: (page: number) => Promise<void>;
//   fetchTopRatedMovies: (page: number) => Promise<void>;
//   fetchSoonMovies: (page: number) => Promise<void>;
// }

const effects = {
  fetchMovies: (page: number) => async (dispatch: Dispatch): Promise<void> => {
    try {
      await dispatch(actions.fetchMoviesRequest());
      const data = await api.getMovies(page);
      await dispatch(actions.fetchMoviesSuccess(data));
      // return true;
    } catch (error) {
      dispatch(actions.fetchMoviesFailure(error.message));
      return new Promise(resolve => resolve(error.message));
    }
  },
  fetchPopularMovies: (page: number) => async (
    dispatch: Dispatch,
  ): Promise<void> => {
    try {
      await dispatch(actions.fetchPopularMoviesRequest());
      const data = await api.getPopularMovies(page);
      await dispatch(actions.fetchPopularMoviesSuccess(data));
      // return true;
    } catch (error) {
      dispatch(actions.fetchPopularMoviesFailure(error.message));
      return new Promise(resolve => resolve(error.message));
    }
  },
  fetchSoonMovies: (page: number) => async (
    dispatch: Dispatch,
  ): Promise<void> => {
    try {
      await dispatch(actions.fetchSoonMoviesRequest());
      const data = await api.getSoonMovies(page);
      await dispatch(actions.fetchSoonMoviesSuccess(data));
      // return true;
    } catch (error) {
      dispatch(actions.fetchSoonMoviesFailure(error.message));
      return new Promise(resolve => resolve(error.message));
    }
  },
  fetchTopRatedMovies: (page: number) => async (
    dispatch: Dispatch,
  ): Promise<void> => {
    try {
      await dispatch(actions.fetchTopRatedMoviesRequest());
      const data = await api.getTopRatedMovies(page);
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
  getSoonMovies: cs(s => s.soonMovies),
  getErrors: cs(s => s.error),
  getLoading: cs(s => s.loading),
};

export { initialState as state, reducer, actions, selectors, effects };
