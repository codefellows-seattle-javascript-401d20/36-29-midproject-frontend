import React from 'react'
import { connect } from 'react-redux'
import * as util from '../../lib/util.js'
import { Redirect } from 'react-router-dom'

class AuthRedirect extends React.Component {
  render() {
    let { location, history, token } = this.props
    let { pathname } = location
    let pathTo = null
    if (pathname === '/login' || pathname === '/signup' || pathname === '/') {
      if (token)
        pathTo = '/dashboard'
      else {
        if (!token)
          pathTo = '/'
      }
    }
    return (
      <div className='auth-redirect'>
        {pathTo ? <Redirect to={pathTo} /> : undefined}
      </div>
    )
  }
}

const mapStateToProps = state => ({ token: state.token })

export default connect(mapStateToProps)(AuthRedirect)