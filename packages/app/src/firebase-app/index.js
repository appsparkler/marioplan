import * as firebase from 'firebase/app'
import 'firebase/firestore'

class FirebaseApp {
  constructor(customConfig) {
    this.app = firebase.initializeApp(customConfig)
    this.db = firebase.firestore()
  }
}

export const {db} = new FirebaseApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'the-marioplan.firebaseapp.com',
  databaseURL: 'https://the-marioplan.firebaseio.com',
  projectId: 'the-marioplan',
  storageBucket: 'the-marioplan.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
})
