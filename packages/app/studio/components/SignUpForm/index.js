import React from 'react'
import useSignUp from './hook-sign-up'

export default () => {
  const {handleSubmit} = useSignUp()
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" />
      <br />
      <input type="password" name="password" />
      <br />
      <button type="submitt">Sign Up</button>
    </form>
  )
}
