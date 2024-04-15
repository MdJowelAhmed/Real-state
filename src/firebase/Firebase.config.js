// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfUn45aWyrZRWFL8ZaIJdtYlOIt4xZBfI",
  authDomain: "fir-hospitalities.firebaseapp.com",
  projectId: "fir-hospitalities",
  storageBucket: "fir-hospitalities.appspot.com",
  messagingSenderId: "535769790408",
  appId: "1:535769790408:web:3d4133c7ae86cc45d6b2fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app