// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM6oN3zpMxDR-0Fx6kkVICd5gW74Kloks",
  authDomain: "netflix-clone-93ef7.firebaseapp.com",
  projectId: "netflix-clone-93ef7",
  storageBucket: "netflix-clone-93ef7.appspot.com",
  messagingSenderId: "723271393518",
  appId: "1:723271393518:web:34e0c28b0c91fc302e93ff"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }