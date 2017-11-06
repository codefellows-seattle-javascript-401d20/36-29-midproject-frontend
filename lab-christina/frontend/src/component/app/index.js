import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from '../landing'
import Profile from '../profile'
import Header from '../header'
import Dashboard from '../dashboard'
import AuthRedirect from '../auth-redirect'
import * as clientProfile from '../../action/client-profile.js'

class App extends React.Component {
  componentWillMount(){
    //fetch user data is logged in
    if(this.props.loggedIn) {
    this.props.fetchClientProfile()
    .catch(console.error)
    }
  }
  render(){
    return(
      <div className='app'>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='*' component={ AuthRedirect } />
            <Route exact path='/' component={ Landing } />
            <Route exact path='/signup' component={ Landing } />
            <Route exact path='/login' component={ Landing } />
            <Route exact path='/dashboard' component={ Dashboard } />
            <Route exact path='/profile' component={ Profile } />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  loggedIn: !!state.token
})

let mapDispatchToProps = (dispatch) => ({
  fetchClientProfile: () => dispatch(clientProfile.fetch())
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
