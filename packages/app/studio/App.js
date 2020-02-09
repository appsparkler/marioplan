import React from 'react'
import SignUpForm from './components/SignUpForm'
import SignOutButton from './components/SignOut'
import firebase from '@marioplan/firebaseApp'

redirectSignedInUser()

function redirectSignedInUser() {
  const {currentUser} = firebase.auth()
  if (currentUser) alert('redirect user to dashboard')
  else alert('user not logged in.  Please sign up.')
}

export default () => {
  return (
    <div>
      <h1>Studio</h1>
      <SignUpForm />
      <SignOutButton />
    </div>
  )
}
