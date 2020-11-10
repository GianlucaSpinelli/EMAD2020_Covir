import * as firebase from 'firebase'; 

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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;