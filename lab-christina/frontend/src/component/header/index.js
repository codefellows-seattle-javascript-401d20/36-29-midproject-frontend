import React from 'react'
import * as auth from '../../action/auth.js'
import * as util from '../../lib/util.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <h1> Charity Choice </h1>
        <nav>

          {util.renderIf(!this.props.loggedIn,
            <ul>
            <li> <Link to='/'> Home </Link> </li>
              <li> <Link to='/login'> Login </Link> </li>
              <li> <Link to='/signup'> Signup </Link> </li>
            </ul>
          )}

          {util.renderIf(this.props.loggedIn,
            <ul>
              <li> <Link to='/dashboard'> Dashboard </Link> </li>
              <li> <Link to='/profile'> Profile </Link> </li>
              <li> <Link to='/upload'> Upload </Link> </li>
            </ul>
          )}

        </nav>
        {util.renderIf(this.props.loggedIn,
          <button onClick={ this.props.logout }> Logout </button>)}
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  loggedIn: !!state.token,
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(auth.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
