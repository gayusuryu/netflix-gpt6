// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQewnypc5lFSh_UGyuGYEidsvQj9N025o",
  authDomain: "netflixgpt-e78a2.firebaseapp.com",
  projectId: "netflixgpt-e78a2",
  storageBucket: "netflixgpt-e78a2.appspot.com",
  messagingSenderId: "237053651940",
  appId: "1:237053651940:web:173f256f16b790342c35f1",
  measurementId: "G-4P8P8TPV8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);