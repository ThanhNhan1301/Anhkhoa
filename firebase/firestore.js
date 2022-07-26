import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcsY6JkV-WA36g0JXZWX9tYuRhNmmLqhM",
  authDomain: "anhkhoa-2ae12.firebaseapp.com",
  projectId: "anhkhoa-2ae12",
  storageBucket: "anhkhoa-2ae12.appspot.com",
  messagingSenderId: "329724637825",
  appId: "1:329724637825:web:e5744e0318df5a21ae5380",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
