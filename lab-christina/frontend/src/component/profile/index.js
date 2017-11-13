import React from 'react'
import { connect } from 'react-redux'
import ProfileForm from '../profile-form'
import * as util from '../../lib/util.js'
import * as clientProfile from '../../action/client-profile.js';
import PhotoForm from '../photo-form';
import * as clientPhoto from '../../action/client-photo.js';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
    };

    this.handleCreate = this.handleCreate.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleUploadPhoto = this.handleUploadPhoto.bind(this)
  }

  handleCreate(profile){
    this.props.profileCreate(profile)
    .then(() => {
      this.props.history.push('/dashboard')
    })
  }

  handleUpdate(profile){
    this.props.profileUpdate(profile)
    this.setState({ editing: false })
  }

  handleUploadPhoto(photo){
    console.log('photo: ', photo)
    this.props.profileUploadPhoto(photo)
  }

  render() {
    let { profile, profileCreate } = this.props

    return (
      <div>

        <h2> profile </h2>

        { profile ?
          <div>
            <h2> { profile.firstName } </h2>
          </div>
          : undefined }

          <ProfileForm onComplete={ this.handleCreate } />

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.clientProfile,
})

const mapDispatchToProps = (dispatch) => ({
  profileCreate: (profile) => dispatch(clientProfile.create(profile)),
  profileUpdate: (profile) => dispatch(clientProfile.update(profile)),
  profileUploadPhoto: (photo) => dispatch(clientPhoto.uploadPhoto(photo)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
