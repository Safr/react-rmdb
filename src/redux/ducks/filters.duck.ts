import { createActions, handleActions, Reducer } from 'redux-actions';
import { createSelector } from 'reselect';

const initialState: IFilterState = {
  rating: {
    min: 5,
    max: 10,
  },
  runtime: {
    min: 45,
    max: 250,
  },
  sort_by: {
    value: 'vote_average',
    label: 'Rating',
  },
  order: {
    value: 'desc',
    label: 'Descending',
  },
  year: new Date().getFullYear(),
};

const actions = createActions<IFilterState>('RESET_FILTERS');

const reducer: Reducer<IFilterState, IFilterState> = handleActions<
  IFilterState,
  IFilterState
>(
  {
    [actions.resetFilters.toString()]: () => initialState,
  },
  initialState,
);

const effects = {};

const getState = state => state.filters;
const cs = cb =>
  createSelector(
    [getState],
    cb,
  );

const selectors = {
  getFilters: cs(s => s.filters),
  getErrors: cs(s => s.error),
};

export { initialState as state, reducer, actions, selectors, effects };
