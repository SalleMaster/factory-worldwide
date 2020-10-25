import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCV5nunBBNUE68ThZ3cVyzuKxD5F2U6h7Q',
  authDomain: 'factory-worldwide-salle.firebaseapp.com',
  databaseURL: 'https://factory-worldwide-salle.firebaseio.com',
  projectId: 'factory-worldwide-salle',
  storageBucket: 'factory-worldwide-salle.appspot.com',
  messagingSenderId: '613377394666',
  appId: '1:613377394666:web:a1c1227719797777789493',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
