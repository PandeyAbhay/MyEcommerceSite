

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCxAx1hw68NfmqyM6-ikKtphvpUqJ8Uwjo",
  authDomain: "maltimart-805ad.firebaseapp.com",
  projectId: "maltimart-805ad",
  storageBucket: "maltimart-805ad.appspot.com",
  messagingSenderId: "965093083993",
  appId: "1:965093083993:web:bb28c8c0d29e7b7f18da48"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app)
export const storage= getStorage(app)

export default app;