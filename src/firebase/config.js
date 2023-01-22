import firebase from 'firebase/app';
import "firebase/firestore" 



const firebaseConfig = {
    apiKey: "AIzaSyCFa2ipImCQRm_f059uJ4lBfObgPjFi04k",
    authDomain: "kitchen31-67c2d.firebaseapp.com",
    projectId: "kitchen31-67c2d",
    storageBucket: "kitchen31-67c2d.appspot.com",
    messagingSenderId: "227465033582",
    appId: "1:227465033582:web:f4913b5bad2a8d4156337f"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig)

  //init services

  const projectFirestore = firebase.firestore()

  export { projectFirestore }
