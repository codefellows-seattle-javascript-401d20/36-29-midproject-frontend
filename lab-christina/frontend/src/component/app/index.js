import React from 'react'
// import './style/main.scss'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from '../landing'
import Profile from '../profile'
import Header from '../header'
import Footer from '../footer'
import Dashboard from '../dashboard'
import AuthRedirect from '../auth-redirect'
import * as clientProfile from '../../action/client-profile.js'

class App extends React.Component {
  componentWillMount(){
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
          <div>
            <Header />
            <Route path='*' component={ AuthRedirect } />
            <Route exact path='/' component={ Landing } />
            <Route exact path='/signup' component={ Landing } />
            <Route exact path='/login' component={ Landing } />
            <Route exact path='/profile' component={ Profile } />
            <Route exact path='/dashboard' component={ Dashboard } />
          </div>
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
