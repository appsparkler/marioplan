import React from 'react'
import useSignUp from './hook-sign-up'

export default () => {
  const {handleSubmit} = useSignUp()
  const [checked, setChecked] = React.useState(true)
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" />
      <br />
      <input type="password" name="password" />
      <br />
      <label>
        Stay Signed In
        <input
          type="checkbox"
          name="staySignedIn"
          checked={checked}
          onChange={(evt) => {
            setChecked(!checked)
          }} />
      </label>
      <br />
      <button type="submitt">Sign Up</button>
    </form>
  )
}
