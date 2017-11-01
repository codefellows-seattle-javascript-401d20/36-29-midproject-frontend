import React from 'react'

let emptyState = {
  firstName: '',
  firstNameDirty: false,
  firstNameError: 'First name is required.',
  lastName: '',
  lastNameDirty: false,
  lastNameError: 'Last name is required.',
  city: '',
  cityDirty: false,
  cityError: '',
  state: '',
  stateDirty: false,
  stateError: '',
  donationGoal: '',
  donationGoalDirty: false,
  donationGoalError: '',
  moneySpent: '',
  moneySpentDirty: false,
  moneySpentError: '',
  bio: '',
  bioDirty: false,
  bioError: '',
}
class ProfileForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.profile ? {...emptyState, ...props.profile} : emptyState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.profile)
      this.setState(props.profile)
  }

  handleChange(e){
    let {value} = e.target
    this.setState({
      bio: value,
      bioDirty: true,
      bioError: value ? null : emptyState.bioError,
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onComplete(this.state)
    this.setState(emptyState)
  }


  render(){
    return (
      <form
        className='profile-form'
        onSubmit={this.handleSubmit}>

        <textarea
          name='bio'
          value={this.state.bio}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.profile ? 'update' : 'create'} profile </button>
      </form>
    )
  }
}

export default ProfileForm
