import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyBk31LMg2akPYk8RO0zcyxLz1dx4k3ZLoU",
  authDomain: "noteproject-e7ac0.firebaseapp.com",
  projectId: "noteproject-e7ac0",
  storageBucket: "noteproject-e7ac0.firebasestorage.app",
  messagingSenderId: "808492065360",
  appId: "1:808492065360:web:efc570e3b8774777586755",
  databaseURL: 'https://noteproject-e7ac0-default-rtdb.europe-west1.firebasedatabase.app/'
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)