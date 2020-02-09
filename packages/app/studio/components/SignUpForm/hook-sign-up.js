import React from 'react'
import FirebaseApp from '@marioplan/firebase-app'

function handleSubmit(evt) {
  evt.preventDefault()
  evt.stopPropagation()
  debugger
}

export default () => {
  return {
    handleSubmit,
  }
}
