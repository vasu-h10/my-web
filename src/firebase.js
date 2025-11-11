import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4M4meh_1bHJXiWXg3_Ggg7WDfCI7yFtE",
  authDomain: "my-web-firebase-app.firebaseapp.com",
  projectId: "my-web-firebase-app",
  storageBucket: "my-web-firebase-app.firebasestorage.app",
  messagingSenderId: "636374653172",
  appId: "1:636374653172:web:7807321a08b48de080a6a1",
  measurementId: "G-X8YEW83Z5P"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
