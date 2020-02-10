import React from 'react'
import useSignIn from './hook-sign-in'

export default () => {
  const {handleSubmit} = useSignIn()
  const [checked, setChecked] = React.useState(true)
  return (
    <div>
      <h3>Sign In</h3>
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
        <button>Sign In</button>
      </form>
    </div>
  )
}
