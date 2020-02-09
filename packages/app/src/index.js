import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import './index.css'
import App from './App.react.js'
import store from './store'
const AppJSX = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(AppJSX, document.getElementById('root'))
