import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'

import Landing from '../landing'
import Dashboard from '../dashboard'
import AuthRedirect from '../auth-redirect'

class App extends React.Component {
  render(){
    return (
      <div className='app'>
        <div>
          <Route path='*' component={AuthRedirect} />
          <Route exact path='/' component={Landing} />
          <Route exact path='/signup' component={Landing} />
          <Route exact path='/login' component={Landing} />
          <Route exact path='/dashboard' component={Dashboard} />
        </div>
      </div>
    )
  }
}

export default App
