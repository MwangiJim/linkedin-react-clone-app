import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDqSZ4iWizq8J_jLW_W66kg2xcgI4b_5i0",
  authDomain: "linkedin-clone-project-3843f.firebaseapp.com",
  projectId: "linkedin-clone-project-3843f",
  storageBucket: "linkedin-clone-project-3843f.appspot.com",
  messagingSenderId: "160842890771",
  appId: "1:160842890771:web:99cd24895c15e08d82c9e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export {db};