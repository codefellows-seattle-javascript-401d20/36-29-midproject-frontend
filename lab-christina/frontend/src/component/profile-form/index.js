import React from 'react'

class ProfileForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bio: '',
      bioDirty: false,
      bioError: 'Bio is required',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // this.validateChange = this.validateChange.bind(this)
  }

  handleChange(event) {
    let { value } = event.target
    this.setState({
      bioDirty: true,
      bioError: value ? null : emptyState.bioError,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onComplete(this.state)
    this.setState(emptyState)
  }

  render() {
    return (
      <form
        className='profile-form'
        onSubmit={ this.handleSubmit }>

        <textarea
          name='bio'
          value={ this.state.bio }
          onChange={ this.handleChange }
        />

        <button type='submit'> create </button>
      </form>
    )
  }
}

export default ProfileForm
