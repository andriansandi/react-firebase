// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB5zlfdfMmNq9rkdOJoPeXxZPfsq1eccI",
  authDomain: "binar-ch9-react-firebase.firebaseapp.com",
  projectId: "binar-ch9-react-firebase",
  storageBucket: "binar-ch9-react-firebase.appspot.com",
  messagingSenderId: "327054418711",
  appId: "1:327054418711:web:8e6fc0021ec86df007cd52",
  measurementId: "G-63H6K06SB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);