
import { initializeApp } from "firebase/app"; 

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC9kiWnYQZEZiMyDK8v9U2oOvGtJY6RcrQ",
  authDomain: "e-commerce-kari-react.firebaseapp.com",
  projectId: "e-commerce-kari-react",
  storageBucket: "e-commerce-kari-react.appspot.com",
  messagingSenderId: "536715823660",
  appId: "1:536715823660:web:a2cf81db35ba36c57f9f89",
  measurementId: "G-0WC17HK973"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 
