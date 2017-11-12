import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCr3YwkxJNUF8kwlvW7rPR9pxsxPSMLoAg",
  authDomain: "quiz-a837c.firebaseapp.com",
  databaseURL: "https://quiz-a837c.firebaseio.com",
  projectId: "quiz-a837c",
  storageBucket: "quiz-a837c.appspot.com",
  messagingSenderId: "723589481347"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
