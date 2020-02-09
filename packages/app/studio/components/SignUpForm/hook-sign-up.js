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
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
      })

  // .createUserWithEmailAndPassword(user.email, user.password)
  // .then((res) => {
  //   debugger
  // })
  // .catch(function(error) {
  //   // Handle Errors here.
  //   const errorCode = error.code
  //   const errorMessage = error.message
  //   // ...
  // })
  // FirebaseApp.auth().setPersistence(FirebaseApp.auth.Auth.Persistence.NONE)
  //     .then(() => {
  //       debugger
  //     })
}

export default () => {
  return {
    handleSubmit,
  }
}
