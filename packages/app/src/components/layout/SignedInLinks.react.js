import React from 'react'
import {Link} from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><Link to="/create">Create Project</Link></li>
      <li><Link to="/">Logout</Link></li>
      <li><Link to="/" className="btn btn-floating pink lighten-3">
        NN
      </Link></li>
    </ul>
  )
}

export default SignedInLinks
