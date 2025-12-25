// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdOYj1vDd9ukJqQSkLEh7fSqnhh7XilEc",
  authDomain: "dragon-news-c1ed1.firebaseapp.com",
  projectId: "dragon-news-c1ed1",
  storageBucket: "dragon-news-c1ed1.firebasestorage.app",
  messagingSenderId: "375648862094",
  appId: "1:375648862094:web:90a19bf641fa0872e32edf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;