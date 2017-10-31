import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter} from 'react-router-dom'

import reducer from './reducer'
import App from './component/app'
import thunk from './lib/redux-thunk.js'
import reporter from './lib/redux-reporter.js'

const store = createStore(reducer, applyMiddleware(thunk, reporter))

let container = document.createElement('div')
document.body.appendChild(container)

ReactDom.render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>
  , container
)
