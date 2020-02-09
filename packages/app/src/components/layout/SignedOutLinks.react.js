import React from 'react'
import {Link} from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li><Link to="/signin">Sign Up</Link></li>
      <li><Link to="/signup">Login</Link></li>
    </ul>
  )
}

export default SignedOutLinks
