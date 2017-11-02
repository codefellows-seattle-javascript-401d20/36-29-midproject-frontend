import React from 'react';
import {connect} from 'react-redux';
import ProfileForm from '../profile-form';
import * as util from '../../lib/util.js';
import * as clientProfile from '../../action/client-profile.js';

class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editing: false,
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleCreate(profile){
    this.props.profileCreate(profile)
    .then(() => {
      this.props.history.push('/dashboard');
    });
  };

  handleUpdate(profile){
    this.props.profileUpdate(profile);
    this.setState({editing: false});
  };

  render(){
    let {
      profile,
      profileCreate,
    } = this.props;

    return (
      <div>
        <h1>Profile</h1>
        { profile ?
          <div>
            <h2>{profile.firstName} {profile.lastName}</h2>
            { this.state.editing ?
              <div>
                <ProfileForm profile={profile} onComplete={this.handleUpdate} />
                <p>
                  <button onClick={() => this.setState({editing: false})}>
                    Cancel
                  </button>
                </p>
              </div>
            :
              <p>
                <button onClick={() => this.setState({editing: true})}>
                  Edit Profile
                </button>
              </p>
            }
          </div>
        :
          <ProfileForm onComplete={this.handleCreate} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.clientProfile,
});

const mapDispatchToProps = (dispatch) => ({
  profileCreate: (profile) => dispatch(clientProfile.create(profile)),
  profileUpdate: (profile) => dispatch(clientProfile.update(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
