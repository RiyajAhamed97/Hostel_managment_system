import * as firebase from 'firebase';




const firebaseConfig = {
 apiKey: "AIzaSyBpyqshX9tc2DVfHoLvzTv5RgFATeGNWLg",
  authDomain: "sample-4de19.firebaseapp.com",
  projectId: "sample-4de19",
  storageBucket: "sample-4de19.appspot.com",
  messagingSenderId: "981267394493",
  appId: "1:981267394493:web:bc5e36394e6de07c40acd4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const database=firebase.database();


