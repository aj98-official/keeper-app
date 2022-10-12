import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDsnOp0dzpckjUt3w24tdA0MEHKShN9wzo",
  authDomain: "keeper-18a98.firebaseapp.com",
  projectId: "keeper-18a98",
  storageBucket: "keeper-18a98.appspot.com",
  messagingSenderId: "639821810336",
  appId: "1:639821810336:web:f7ea7a6ca069ac4190d7c5",
  measurementId: "G-GJ94VVNXS1"
};
firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const db = firebase.firestore();
const provider = new GoogleAuthProvider();
export {firebase,auth,provider,db};