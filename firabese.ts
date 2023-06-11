import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnHzp7GVxP_GfJRFxRzkVh50m58-F4cc0",
  authDomain: "chat-gbt-messenger-9b787.firebaseapp.com",
  projectId: "chat-gbt-messenger-9b787",
  storageBucket: "chat-gbt-messenger-9b787.appspot.com",
  messagingSenderId: "111310058092",
  appId: "1:111310058092:web:e31ca1223aa7156f729e49",
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
