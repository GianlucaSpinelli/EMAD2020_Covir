import * as firebase from 'firebase'; 
import 'firebase/firestore';
import 'firebase/auth';
/*
const db = firebase.firestore();
export const createRichiedente = (username) => {
  return db
    .collection('richiedenti').add(username);
}*/

const firebaseConfig = {
    apiKey: "AIzaSyCCtUq1IhL-QqTVuBmCqRarqXM38oBbZtI",
    authDomain: "covir-37235.firebaseapp.com",
    databaseURL: "https://covir-37235.firebaseio.com",
    projectId: "covir-37235",
    storageBucket: "covir-37235.appspot.com",
    messagingSenderId: "307921133259",
    appId: "1:307921133259:web:bd40fc14759a93e4fb854e",
    measurementId: "G-JP11MN3ZE5"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  //firebase.analytics();

  export const auth=firebase.auth();
  export const authProvider = firebase.auth;
  export const us= firebase.auth().currentUser;
  export const ref=firebase.firestore();
  export const dbref = firebase.database().ref();
