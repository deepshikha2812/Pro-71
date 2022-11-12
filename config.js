import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDbOQfCLkYV60lM3JCsVvfSIO50EcoC3QQ",
    authDomain: "e-ride-c59bc.firebaseapp.com",
    projectId: "e-ride-c59bc",
    storageBucket: "e-ride-c59bc.appspot.com",
    messagingSenderId: "1020738227994",
    appId: "1:1020738227994:web:cb14748895915fd80ca6a3"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
