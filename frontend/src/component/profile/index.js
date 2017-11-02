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
    let {
      profile, profileCreate } = this.props
    // TODO: write the return 

  }

}