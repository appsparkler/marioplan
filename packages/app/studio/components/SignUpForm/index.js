import React from 'react'
import useSignUp from './hook-sign-up'

export default () => {
  const {handleSubmit} = useSignUp()
  const [checked, setChecked] = React.useState(true)
  return (
    <div>
      <h3>Sign Up</h3>
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
        <button>Sign Up</button>
      </form>
    </div>
  )
}
