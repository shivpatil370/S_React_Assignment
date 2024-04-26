// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWbov0ecscGuil1wvSizr8DbyNvHhrXcw",
  authDomain: "expense-tracker-app-15d5d.firebaseapp.com",
  databaseURL: "https://expense-tracker-app-15d5d-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-app-15d5d",
  storageBucket: "expense-tracker-app-15d5d.appspot.com",
  messagingSenderId: "642206502211",
  appId: "1:642206502211:web:56d3bbddc6e428271bf3f6",
  measurementId: "G-NSR9J1YDH8",
  databaseURL:"https://expense-tracker-app-15d5d-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);