import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBt8GLsLhECkECGbB7P_xwhpTw0Tnu7m4U",
  authDomain: "clone-5513a.firebaseapp.com",
  databaseURL: "https://clone-5513a.firebaseio.com",
  projectId: "clone-5513a",
  storageBucket: "clone-5513a.appspot.com",
  messagingSenderId: "43858164082",
  appId: "1:43858164082:web:1b9b01fadcbc8013e385eb",
  measurementId: "G-G9E0NNZ44Y"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };