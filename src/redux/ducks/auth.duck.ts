import { Action, createActions, handleActions, Reducer } from 'redux-actions';
import { push } from 'connected-react-router';
import { createSelector } from 'reselect';
import { lensPath, view } from 'ramda';
import {
  firebaseApp,
  // facebookProvider,
  // githubProvider,
  // twitterProvider,
  // googleProvider,
} from 'lib/firebase';

const initialState: IAuthState = {
  isAuthenticated: false,
  user: null,
  error: false,
};

const actions = createActions<IAuthState>(
  'SET_USER_SUCCESS',
  'SET_USER_FAILURE',
  'AUTH_LOGOUT',
);

const reducer: Reducer<IAuthState, IAuthState> = handleActions<
  IAuthState,
  IAuthState
>(
  {
    [actions.setUserSuccess.toString()]: (
      state: IAuthState,
      { payload: user }: Action<IAuthState>,
    ) => ({
      ...state,
      isAuthenticated: true,
      user,
    }),
    [actions.setUserFailure.toString()]: (state: IAuthState) => ({
      ...state,
      isAuthenticated: false,
      error: true,
    }),
    [actions.authLogout.toString()]: () => initialState,
  },
  initialState,
);
const effects = {
  authLogin: (
    { email, password },
    setErrors,
    setSubmitting,
  ) => async dispatch => {
    try {
      let data;
      const providers = await firebaseApp.auth().fetchProvidersForEmail(email);
      if (providers.length === 0) {
        data = await firebaseApp
          .auth()
          .createUserWithEmailAndPassword(email, password);
      }
      data = await firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log('data', data.user);
      await Promise.all([
        dispatch(actions.setUserSuccess(data.user)),
        setSubmitting(false),
      ]);

      return await dispatch(push('/'));
    } catch (error) {
      setSubmitting(false);
      if (error) {
        const message = view(lensPath(['message']), error);
        return new Promise(resolve => resolve(setErrors({ form: message })));
      }
      return new Promise(resolve => resolve(error));
    }
  },
  authLogout: () => async dispatch => {
    firebaseApp.auth().signOut();
    await dispatch(actions.authLogout());
    await dispatch(push('/login'));
  },
};

const getState = state => state.auth;
const cs = cb =>
  createSelector(
    [getState],
    cb,
  );

const selectors = {
  getUser: cs(s => s.user),
  getAuth: cs(s => s.isAuthenticated),
  getErrors: cs(s => s.error),
};

export { initialState as state, reducer, actions, selectors, effects };
