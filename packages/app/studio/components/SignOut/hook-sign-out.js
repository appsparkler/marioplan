import React from 'react'
import firebase from '@marioplan/firebaseApp'

function handleClick(evt) {
  firebase.auth().signOut()
      .then((res) => {
        debugger
      })
      .catch((err) => {
        debugger
      })
}

export default () => {
  return {
    handleClick,
  }
}
