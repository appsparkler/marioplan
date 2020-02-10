import React from 'react'
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'
import SignOutButton from './components/SignOut'
import firebase from '@marioplan/firebaseApp'

firebase.auth().onAuthStateChanged((user) => {
  if (user) alert('redirect user to dashboard')
  else alert('user not logged in.  Please sign up.')
})

export default () => {
  return (
    <div>
      <h1>Studio</h1>
      <SignUpForm />
      <SignInForm />
      <SignOutButton />
    </div>
  )
}
