import { db } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";

async function test() {
  try {
    const snapshot = await getDocs(collection(db, "vendors"));
    console.log("✅ Vendors fetched:", snapshot.docs.map(doc => doc.data()));
  } catch (e) {
    console.error("❌ Firebase test failed:", e.message);
  }
}

test();
