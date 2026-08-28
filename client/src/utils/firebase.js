
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ainotesgenerator-1a2d4.firebaseapp.com",
  projectId: "ainotesgenerator-1a2d4",
  storageBucket: "ainotesgenerator-1a2d4.firebasestorage.app",
  messagingSenderId: "106583410209",
  appId: "1:106583410209:web:eb4ef422588c5d03a2c560"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}