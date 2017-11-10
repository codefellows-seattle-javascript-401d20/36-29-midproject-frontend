import React from 'react'
import { connect } from 'react-redux'
import * as util from '../../lib/util.js'
import ProfileForm from '..//profile-form'
import * as clientProfile from '../../action/client-profile.js'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
    }
    this.handleCreate = this.handleCreate.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  
  componentDidMount() {
    this.props.fetchClientProfile()
  }

  handleCreate(profile) {
    this.props.profileCreate(profile)
      .then(() => {
        this.props.history.push('/dashboard')
      })
  }

  handleUpdate(profile) {
    this.props.profileUpdate(profile)
    this.setState({ editing: false })
  }

  render() {
    let { profile, profileCreate } = this.props
    // TODO: write the return 

    return (
      <div id='profile'>
        {console.log('--->>>THIS PROPS', this.props)}
        <h2> profile {console.log('---> ConsoleLog', profile)} </h2>
        {profile ?
          <div>
            <h2> {profile.username} </h2>
            <h3> {profile.email} </h3>
            {this.state.editing ?
              <div>
                <ProfileForm profile={profile} onComplete={this.handleUpdate} />
                <button onClick={() => this.setState({ editing: false })}>
                  Cancel
                </button>
              </div>
              : // OR
              <div>
                <p>hello World</p>

                <p> {profile.bio} </p>
                <button onClick={() => this.setState({ editing: true })}>
                  Edit Bio
                </button>

              </div>
            }
          </div>
          : // OR
          <ProfileForm onComplete={this.handleCreate} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ profile: state.clientProfile })

const mapDispatchToProps = (dispatch) => ({
  fetchClientProfile: () => dispatch(clientProfile.fetch()),
  profileCreate: (profile) => dispatch(clientProfile.create(profile)),
  profileUpdate: (profile) => dispatch(clientProfile.update(profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)