// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDrQpnEQ200kUbEKf_EAmYKaOWZvn2C73c",
    authDomain: "learning-projects-a4d62.firebaseapp.com",
    projectId: "learning-projects-a4d62",
    storageBucket: "learning-projects-a4d62.appspot.com",
    messagingSenderId: "991820559427",
    appId: "1:991820559427:web:9d62a046b91fadb35610f6",
    measurementId: "G-CHXN04P9YR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

 export default db;