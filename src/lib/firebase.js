import Firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

const app = {
    apiKey: "AIzaSyBPsk-cPKq3heoHQn4boGDHBPf99jbwWA0",
  authDomain: "chatapp-c2d2c.firebaseapp.com",
  projectId: "chatapp-c2d2c",
  storageBucket: "chatapp-c2d2c.appspot.com",
  messagingSenderId: "1044331284024",
  appId: "1:1044331284024:web:776a9d1af9a9bda770c8cd"
}

const FirebaseApp = Firebase.initializeApp(app);

const db =  Firebase.firestore();

const auth = Firebase.auth();

const provider = new Firebase.auth.GoogleAuthProvider();

export { db , auth , provider};