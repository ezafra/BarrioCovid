import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"


var firebaseConfig = {
    apiKey: "AIzaSyBQA7nRXI81W0Zz81NqI9o3Qu_LPZLWyF0",
    authDomain: "edel-barriocovid.firebaseapp.com",
    projectId: "edel-barriocovid",
    storageBucket: "edel-barriocovid.appspot.com",
    messagingSenderId: "473075596206",
    appId: "1:473075596206:web:d960bf7237a78483ada63f",
    measurementId: "G-QVF7P9R7DT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })
  

  export default firebaseConfig;