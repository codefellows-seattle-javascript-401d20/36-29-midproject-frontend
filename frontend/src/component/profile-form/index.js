import React from 'react'

let emptyState = {
  bio: '',
  firstName: '',
  lastName: '',
  bioDirty: false,
  bioError: 'Bio required',
}

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.profile ? { ...emptyState, ...props.profile } : emptyState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(props) {
    if (props.profile)
      this.setState(props.profile)
  }

  handleChange(e) {
    let { name, value } = e.target
    this.setState({
      [name]: value,
      bioDirty: true,
      bioError: value ? null : emptyState.bioError,
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete(this.state)
    this.setState(emptyState)
  }

  render() {
    return (
      <form
        className='profile-form'
        onSubmit={this.handleSubmit}>

        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          value={this.state.firstName}
          onChange={this.handleChange}
        />

        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={this.state.lastName}
          onChange={this.handleChange}
        />


        <textarea
          name='bio'
          value={this.state.bio}
          onChange={this.handleChange}
        />
        <button type='submit' >
          {this.props.profile ? 'update' : 'create'} profile
        </button>
      </form>
    )
  }
}

export default ProfileForm