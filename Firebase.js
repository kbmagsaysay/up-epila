import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyD0hpt8uQHCNywofnZ5rEyIBIXQs2G9eHk",
  authDomain: "up-epila-project.firebaseapp.com",
  databaseURL: "https://up-epila-project.firebaseio.com",
  projectId: "up-epila-project",
  storageBucket: "up-epila-project.appspot.com",
  messagingSenderId: "112411854982",
  appId: "1:112411854982:web:76b3325a5bf8b8ffdbe907",
  measurementId: "G-V8XHW24XED"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;