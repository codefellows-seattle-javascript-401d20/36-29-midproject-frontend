import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import AuthForm from '../auth-form'
import * as util from '../../lib/util.js'
import * as auth from '../../action/auth.js'

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }

  handleLogin(user){
    this.props.login(user)
      .then(() => {
        this.props.history.push('/dashboard')
        this.props.getProfile()
      })
      .catch(console.error)
  }

  handleSignup(user){
    this.props.signup(user)
      .then(() => {
        this.props.history.push('/dashboard')
      })
      .catch(console.error)
  }

  render(){
    console.log('PROPS', this.props)
    let {
      location,
    } = this.props
    return (
      <div className='landing'>
        {util.renderIf(location.pathname === '/',
          <h2> Welcome </h2>
        )}

        {util.renderIf(location.pathname === '/signup',
          <div>
            <h2> Signup </h2>
            <AuthForm onComplete={this.handleSignup} />
            <p> Already have an account? </p>
            <Link to='/login'> Login </Link>
          </div>
        )}

        {util.renderIf(location.pathname === '/login',
          <div>
            <h2> login </h2>
            <AuthForm type='login' onComplete={this.handleLogin} />
            <p> Dont have an account ? </p>
            <Link to='/signup'> Signup </Link>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
})

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(auth.signup(user)),
  login: (user) => dispatch(auth.login(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
