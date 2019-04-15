import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCwagV4zJdRYz_pGXZy-cHEycEXpBMPZ1g",
  authDomain: "eiga-de72c.firebaseapp.com",
  databaseURL: "https://eiga-de72c.firebaseio.com",
  projectId: "eiga-de72c",
  storageBucket: "eiga-de72c.appspot.com",
  messagingSenderId: "687294033476"
};

// const config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// };

firebase.initializeApp(config);
const database = firebase.database();
const githubProvider = new firebase.auth.GithubAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, githubProvider , googleAuthProvider, database as default };
