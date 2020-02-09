import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/auth'

const {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} = process.env

const firebaseConfig = {
  apiKey, authDomain, databaseURL,
  projectId, storageBucket,
  messagingSenderId, appId,
}

const FirebaseApp = firebase.initializeApp(firebaseConfig)

export default FirebaseApp
