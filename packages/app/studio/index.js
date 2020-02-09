import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//
// import {setupFirebaseApp} from '@marioplan/firebaseApp'
// setupFirebaseApp(process.env)

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
