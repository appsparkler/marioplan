import React from 'react'
import Notifications from './Notifications.react'
import ProjectList from '../projects/ProjectList.react'

export default function() {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  )
}
