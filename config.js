import firebase from 'firebase';
require('@firebase/firestore');
var firebaseConfig = {
    apiKey: "AIzaSyBnnOPmW7SqlQ6Z4WP6d3ydvNJiZbO4lsg",
    authDomain: "kisanseva-1f811.firebaseapp.com",
    projectId: "kisanseva-1f811",
    storageBucket: "kisanseva-1f811.appspot.com",
    messagingSenderId: "834056088480",
    appId: "1:834056088480:web:ae2b14d7e546366d0092c5",
    firebaseURL:"https://kisanseva-1f811.firebaseio.com"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();