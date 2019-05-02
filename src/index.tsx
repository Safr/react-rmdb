import * as React from 'react';
import * as ReactDOM from 'react-dom';
// HELPERS
import { firebaseApp } from 'lib/firebase';
// REDUX
import { history, store } from 'redux/store';
// DUCKS
import { actions as authActions } from 'redux/ducks/auth.duck';
// COMPONENTS
import App from './App';

const renderApp = (Application: React.ComponentType<any>) => {
  ReactDOM.render(<Application />, document.getElementById('root'));
};

renderApp(App);

firebaseApp.auth().onAuthStateChanged((user: any) => {
  if (user) {
    store.dispatch(authActions.setUserSuccess(user));
    renderApp(App);
  } else {
    renderApp(App);
    history.push('/');
  }
});

/* eslint-disable global-require */
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    renderApp(NextApp);
  });
}
