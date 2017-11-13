import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import AuthForm from '../auth-form'
import * as util from '../../lib/util.js'
import * as auth from '../../action/auth.js'
import './_landing.scss'

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
    })
    .catch(console.error)
  }

  handleSignup(user){
    this.props.signup(user)
    .then(() => {
      this.props.history.push('/profile')
    })
    .catch(console.error)
  }

  render(){
    let { location } = this.props
    console.log('Landing props', this.props)
    return (
      <div className='landing'>
      {util.renderIf(location.pathname === '/',
      <div className='landingPara'>

        <h3> Our Mission </h3>
          <p className='landingParaOne'><strong>:: HOVER ME :: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ligula et nisi varius, at euismod augue efficitur. Nunc malesuada justo a luctus porta. Praesent varius tincidunt est quis tincidunt. Praesent malesuada nunc at libero pellentesque bibendum. Donec suscipit turpis quis suscipit semper. Etiam fermentum ipsum ut nunc consequat, a tincidunt elit lacinia. Integer porta facilisis urna a interdum. Cras pulvinar elit sed bibendum iaculis. Nam lacinia dapibus leo quis dictum. Nullam semper magna at massa tincidunt tincidunt.</p>
        <h3> Community </h3>
          <p className='landingParaTwo'><strong>:: HOVER ME :: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ligula et nisi varius, at euismod augue efficitur. Nunc malesuada justo a luctus porta. Praesent varius tincidunt est quis tincidunt. Praesent malesuada nunc at libero pellentesque bibendum. Donec suscipit turpis quis suscipit semper. Etiam fermentum ipsum ut nunc consequat, a tincidunt elit lacinia. Integer porta facilisis urna a interdum. Cras pulvinar elit sed bibendum iaculis. Nam lacinia dapibus leo quis dictum. Nullam semper magna at massa tincidunt tincidunt.</p>
        <h3> Contributions </h3>
          <p className='landingParaThree'><strong>:: HOVER ME :: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ligula et nisi varius, at euismod augue efficitur. Nunc malesuada justo a luctus porta. Praesent varius tincidunt est quis tincidunt. Praesent malesuada nunc at libero pellentesque bibendum. Donec suscipit turpis quis suscipit semper. Etiam fermentum ipsum ut nunc consequat, a tincidunt elit lacinia. Integer porta facilisis urna a interdum. Cras pulvinar elit sed bibendum iaculis. Nam lacinia dapibus leo quis dictum. Nullam semper magna at massa tincidunt tincidunt.</p>

      </div>
    )}

    {util.renderIf(location.pathname === '/signup',
      <div>
        <AuthForm onComplete={this.handleSignup} />
        <p> already have an account? </p>
        <Link to='/login'> login </Link>
      </div>
    )}

    {util.renderIf(location.pathname === '/login',
    <div>
      <AuthForm type='login' onComplete={this.handleLogin} />
      <p> dont have an account ? </p>
      <Link to='/signup'> signup </Link>
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
