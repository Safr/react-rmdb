import { createActions, handleActions, Reducer } from 'redux-actions';
import { createSelector } from 'reselect';

const initialState: IMoviesState = {
  movies: [],
  favorites: [],
  watchLater: null,
};

const actions = createActions<IMoviesState>('RESET_FILTERS');

const reducer: Reducer<IMoviesState, IMoviesState> = handleActions<
  IMoviesState,
  IMoviesState
>(
  {
    [actions.resetFilters.toString()]: () => initialState,
  },
  initialState,
);

const effects = {};

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
