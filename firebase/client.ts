// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth }  from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWp-71zIBhj3zd3BPZgmSAd40c24LaOUU",
  authDomain: "prepwise-a01ec.firebaseapp.com",
  projectId: "prepwise-a01ec",
  storageBucket: "prepwise-a01ec.firebasestorage.app",
  messagingSenderId: "1038168344494",
  appId: "1:1038168344494:web:aa8777d571b043509fea3f",
  measurementId: "G-EHD7JF5MLE"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);