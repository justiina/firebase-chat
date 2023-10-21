import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, 
  query, onSnapshot, orderBy } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_APIKEY,
  authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECTID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.EXPO_PUBLIC_APPID,
};

initializeApp(firebaseConfig);

const firestore = getFirestore();
const MESSAGES = "messages";
const auth = getAuth();

export {
  collection,
  addDoc,
  serverTimestamp,
  query,
  onSnapshot,
  orderBy,
  firestore,
  MESSAGES,
  auth,
  signInWithEmailAndPassword,
};
