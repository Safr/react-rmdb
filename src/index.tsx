import * as React from 'react';
import * as ReactDOM from 'react-dom';
// HELPERS
import { firebaseApp } from 'lib/firebase';
// REDUX
import { history, store } from 'redux/store';
// DUCKS
import { actions as favoritesActions } from 'redux/ducks/favorites.duck';
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
    const userUid = user.uid;
    firebaseApp
      .database()
      .ref(`${userUid}/favorites`)
      .once('value')
      .then(snapshot => {
        const favoritesIds = snapshot.val();
        console.log('Object.keys(favoritesIds)', Object.keys(favoritesIds));
        if (favoritesIds) {
          store.dispatch(favoritesActions.setFavoritedIdsSuccess(Object.keys(favoritesIds)));
        }
      });
    firebaseApp
      .database()
      .ref(`${userUid}/watchLater`)
      .once('value')
      .then(snapshot => {
        const firebaseUserLists = snapshot.val();
        console.log('firebaseUserLists', firebaseUserLists);
        if (firebaseUserLists) {
          console.log(firebaseUserLists);
        }
      });
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
