
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0cYT1ZQjrq6CVhzB6IlRA8hNJiTvhrT4",
  authDomain: "myshekhar-c7065.firebaseapp.com",
  databaseURL: "https://myshekhar-c7065-default-rtdb.firebaseio.com",
  projectId: "myshekhar-c7065",
  storageBucket: "myshekhar-c7065.appspot.com",
  messagingSenderId: "450997925456",
  appId: "1:450997925456:web:4dd224efc27c91d0bd4355"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };