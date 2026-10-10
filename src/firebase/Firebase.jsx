import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBilItZZD0Bux_GLr7Q35bYM9qkbkqsFyg",
  authDomain: "superfon-register.firebaseapp.com",
  projectId: "superfon-register",
  storageBucket: "superfon-register.firebasestorage.app",
  messagingSenderId: "993362912670",
  appId: "1:993362912670:web:5804a3419c0dd76c22628f"
};
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);







