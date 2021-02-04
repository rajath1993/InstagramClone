import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAPJdOaQr8ZctAp3iZRDxFhLSStgyPn0bM",
    authDomain: "instagram-clone-react-374cc.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-374cc-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-react-374cc",
    storageBucket: "instagram-clone-react-374cc.appspot.com",
    messagingSenderId: "679095330871",
    appId: "1:679095330871:web:463f5ba9530d483fc237b2",
    measurementId: "G-47Y32SX44Y"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db,auth,storage};