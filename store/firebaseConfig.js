// firebaseConfig.js

// Import initializeApp from Firebase
import { initializeApp } from "firebase/app";

import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE2qPw2-EgvSe7dYQPlF48BtR2QSKlokk",
  authDomain: "degree-crud-app-2c37f.firebaseapp.com",
  projectId: "degree-crud-app-2c37f",
  storageBucket: "degree-crud-app-2c37f.appspot.com",
  messagingSenderId: "1996066906",
  appId: "1:1996066906:web:b8bf882a652cca83f84863",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Export the Firebase services for use in your app
export { db, auth };
