import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAmj6a_btxSzQir_xoqqTQ15Nxg7lDsBII",
    authDomain: "clone-ebc9d.firebaseapp.com",
    projectId: "clone-ebc9d",
    storageBucket: "clone-ebc9d.appspot.com",
    messagingSenderId: "99320461579",
    appId: "1:99320461579:web:a50b4a8f2f9560bd7eca0e"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth =firebase.auth();

  export{ db, auth};