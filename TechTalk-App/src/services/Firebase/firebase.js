// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYza3yb3HJygsLEOJVDXYvX8xN2d71evM',
  authDomain: 'techtalk-b404c.firebaseapp.com',
  projectId: 'techtalk-b404c',
  storageBucket: 'techtalk-b404c.appspot.com',
  messagingSenderId: '196828381560',
  appId: '1:196828381560:web:d545dc170fc040f463088d',
  databaseURL: 'https://techtalk-b404c-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const realtimeDB = getDatabase(firebase);
export default firebase;
