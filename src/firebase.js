import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
  apiKey: 'AIzaSyCTASeducSattEcYnmanXlj_krRcvxM-O8',
  authDomain: 'eighth-pen-299101.firebaseapp.com',
  projectId: 'eighth-pen-299101',
  storageBucket: 'eighth-pen-299101.appspot.com',
  messagingSenderId: '990070751007',
  appId: '1:990070751007:web:32fc1ebf8af8ac68f8ba2a',
  measurementId: 'G-WFSZRS2W1Z'
}).auth()
