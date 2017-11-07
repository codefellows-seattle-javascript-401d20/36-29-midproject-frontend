import React from 'react'
import { connect } from 'react-redux'
import ProfileForm from '../profile-form'
import * as util from '../../lib/util.js'
import * as clientProfile from '../../action/client-profile.js'

class Profile extends React.Component {
  render(){
    let { profile, profileCreate, profileUpdate } = this.props
    return(
      <div>
      <h2> profile </h2>
      { profile ?
        <div>
        <h2> { profile.username } </h2>
        <h2> { profile.email } </h2>
        <p> { profile.bio } </p>
        <ProfileForm profile={ profile } onComplete={ profileUpdate } />
        </div>
        :
        <ProfileForm onComplete={ profileCreate } />
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.clientProfile,
})

const mapDispatchToProps = (dispatch) => ({
  profileCreate: (profile) => dispatch(clientProfile.create(profile)),
  profileUpdate: (profile) => dispatch(clientProfile.create(profile)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
