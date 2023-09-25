// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
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
  appId: "1:237053651940:web:4130b472b5bea1592c35f1",
  measurementId: "G-6TYJLNM0W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();