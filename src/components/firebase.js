import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAB7NEvIg1wKlWA6FRjyn5s2qglcxhh1-A",
    authDomain: "gurukul-d641b.firebaseapp.com",
    projectId: "gurukul-d641b",
    storageBucket: "gurukul-d641b.appspot.com",
    messagingSenderId: "1002055219118",
    appId: "1:1002055219118:web:f5c2d5bbb560092e6aba3f",
    measurementId: "G-DR77BGFVBB"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
