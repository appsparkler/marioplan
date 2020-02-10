import React from 'react'
import FirebaseApp from '@marioplan/firebaseApp'

function handleSubmit(evt) {
  evt.preventDefault()
  evt.stopPropagation()
  const fd = new FormData(evt.target)
  const user = {
    email: fd.get('email'),
    password: fd.get('password'),
    staySignedIn: fd.get('staySignedIn'),
  }
  const persistencType = user.staySignedIn === 'on' ? 'LOCAL': 'NONE'
  const Persistence = FirebaseApp.auth.Auth.Persistence[persistencType]
  FirebaseApp.auth().setPersistence(Persistence)
      .then(() => {
        FirebaseApp.auth().signInWithEmailAndPassword(user.email, user.password)
      })
      .catch(function(error) {
        const errorCode = error.code
        const errorMessage = error.message
      })
}

export default () => {
  return {
    handleSubmit,
  }
}
