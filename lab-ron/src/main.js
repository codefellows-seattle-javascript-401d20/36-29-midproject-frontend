import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './component/app'

let container = document.createElement('div')
document.body.appendChild(container)

ReactDOM.render(
  <Provider>
    <App />
  </Provider>
  , container)