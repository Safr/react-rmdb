import * as React from 'react';
import * as ReactDOM from 'react-dom';
// REDUX
import { store, history } from 'redux/store';
import { actions as userActions } from 'redux/ducks/user.duck';
import { firebase } from 'lib/firebase';
// COMPONENTS
import App from './App';

const renderApp = (Application: React.ComponentType<any>) => {
  ReactDOM.render(<Application />, document.getElementById('root'));
};

// renderApp(App);

firebase.auth().onAuthStateChanged((user: any) => {
  if (user) {
    store.dispatch(userActions.setUserSuccess(user));
    renderApp(App);
    // store.dispatch(startSetExpenses()).then(() => renderApp(App));
    // store.dispatch(startSetExpenses());
    // if (history.location.pathname === '/') {
    //   history.push('/dashboard');
    // }
  } else {
    // store.dispatch(logout());
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
