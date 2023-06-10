import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCPpUxVfqKbmZj3XY04Pek_fBDMFal4x5g",
  authDomain: "ride-72c35.firebaseapp.com",
  projectId: "ride-72c35",
  storageBucket: "ride-72c35.appspot.com",
  messagingSenderId: "1004308768489",
  appId: "1:1004308768489:web:08dc94be9949472cdff278"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
