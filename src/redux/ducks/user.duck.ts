import { Action, createActions, handleActions, Reducer } from 'redux-actions';
import { createSelector } from 'reselect';

const initialState: IUserState = {
  isAuthenticated: false,
  user: null,
  error: false,
};

const actions = createActions<IUserState>(
  'SET_USER_SUCCESS',
  'SET_USER_FAILURE',
);

const reducer: Reducer<IUserState, IUserState> = handleActions<
  IUserState,
  IUserState
>(
  {
    [actions.setUserSuccess.toString()]: (
      state: IUserState,
      { payload: user }: Action<IUserState>,
    ) => ({
      ...state,
      user,
    }),
    [actions.setUserFailure.toString()]: (state: IUserState) => ({
      ...state,
      error: true,
    }),
  },
  initialState,
);

const effects = {};

const getState = state => state.user;
const cs = cb =>
  createSelector(
    [getState],
    cb,
  );

const selectors = {
  getUser: cs(s => s.user),
  getErrors: cs(s => s.error),
};

export { initialState as state, reducer, actions, selectors, effects };
