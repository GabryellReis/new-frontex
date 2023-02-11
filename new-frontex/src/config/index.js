
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgoNynYWkw32U1Zo1WSHyGzgswe2gksFs",
  authDomain: "new-frontex.firebaseapp.com",
  databaseURL: "https://new-frontex-default-rtdb.firebaseio.com",
  projectId: "new-frontex",
  storageBucket: "new-frontex.appspot.com",
  messagingSenderId: "971064293638",
  appId: "1:971064293638:web:6c4bb8fb748edb51ef4687",
  measurementId: "G-ZZNP07XB8D"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app)

export {firestore, app, auth}