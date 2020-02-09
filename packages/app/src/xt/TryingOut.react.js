import React from 'react'

export const ChildComponent = ({msg}) => (
  <h1 className="icon-star">Hello World.....{msg}</h1>
)

export const TrialComponent = ({msg}) => (
  <div>
    { msg ? <ChildComponent msg={msg} /> : <h1>No Message</h1>}
  </div>
)
