import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
   apiKey: "AIzaSyAVOW5C4Or6VWpkHBPpr4-WweS9kQE7EA4",
   authDomain: "mi-app-react-17b9b.firebaseapp.com",
   projectId: "mi-app-react-17b9b",
   storageBucket: "mi-app-react-17b9b.appspot.com",
   messagingSenderId: "618946900088",
   appId: "1:618946900088:web:47ec23084c97a62e5abd8d"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
   db,
   googleAuthProvider,
   firebase
}