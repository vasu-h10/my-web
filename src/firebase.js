import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔑 Replace with your actual Firebase project credentials
const firebaseConfig = {
  apiKey: "YOUR_REAL_API_KEY",
  authDomain: "YOUR_REAL_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_REAL_PROJECT_ID",
  storageBucket: "YOUR_REAL_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_REAL_SENDER_ID",
  appId: "YOUR_REAL_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore instance
export const db = getFirestore(app);
