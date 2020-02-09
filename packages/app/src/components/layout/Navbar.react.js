import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks.react'
import SignedOutLinks from './SignedOutLinks.react'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            MarioPlan
          </Link>
          <SignedInLinks />
          <SignedOutLinks />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
