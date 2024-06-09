// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore' 
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC50NRwVGEUyBKiTHYC_uaNPE9Zudcw6VY",
  authDomain: "fir-travel-8ab0e.firebaseapp.com",
  projectId: "fir-travel-8ab0e",
  storageBucket: "fir-travel-8ab0e.appspot.com",
  messagingSenderId: "470686574676",
  appId: "1:470686574676:web:db221fd932883580ff65c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); 

export const auth = initializeAuth (app, {
  persistence: getReactNativePersistence(AsyncStorage) 
})

export const usersRef = collection (db, 'users');
export const roomRef = collection (db, 'rooms');