import React from 'react'
import useSignOut from './hook-sign-out'

export default () => {
  const {handleClick} = useSignOut()
  return (
    <div>
      <button onClick={handleClick}>Sign Out</button>
    </div>)
}
