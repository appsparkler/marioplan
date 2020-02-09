import React from 'react'
import FirebaseApp from '@marioplan/firebaseApp'

function handleSubmit(evt) {
  evt.preventDefault()
  evt.stopPropagation()
  const fd = new FormData(evt.target)
  const user = {
    email: fd.get('email'),
    password: fd.get('password'),
  }
  FirebaseApp.auth().setPersistence(FirebaseApp.auth.Auth.Persistence.LOCAL)
      .then(() => {
        FirebaseApp.auth().createUserWithEmailAndPassword(user.email, user.password)
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
