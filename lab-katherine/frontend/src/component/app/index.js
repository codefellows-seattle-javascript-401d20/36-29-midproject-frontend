import './_app.scss';
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from '../header';
import Landing from '../landing';
import Profile from '../profile';
import Dashboard from '../dashboard';
import AuthRedirect from '../auth-redirect';
import * as clientProfile from '../../action/client-profile.js';
import Search from '../search';

class App extends React.Component {
  componentDidMount(){
    if(this.props.loggedIn){
      this.props.fetchClientProfile()
      .catch(console.error)
    }
  }

  render(){
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='*' component={AuthRedirect} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/signup' component={Landing} />
            <Route exact path='/login' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/search' component={Search} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  loggedIn: !!state.token,
})

const mapDispatchToProps = (dispatch) => ({
  fetchClientProfile: () => dispatch(clientProfile.fetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
