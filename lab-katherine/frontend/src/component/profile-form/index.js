import React from 'react';
import * as util from '../../lib/util.js';
import validator from 'validator';

let emptyState = {
  firstName: '',
  firstNameDirty: false,
  firstNameError: 'First name is required!',
  lastName: '',
  lastNameDirty: false,
  lastNameError: 'Last name is required!',
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
    super(props);
    this.state = props.profile ? {...emptyState, ...props.profile} : emptyState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.profile)
      this.setState(props.profile);
  }

  handleChange(e){
    let {name, value, type} = e.target;
    value = type === 'number' ? Number(value) : value;
    this.setState({
      [name]: value,
      [`${name}Dirty`]: true,
      [`${name}Error`]: value ? null : emptyState.bioError,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }


  render(){
    return (
      <form
        className='profile-form'
        onSubmit={this.handleSubmit}>

        <label>First Name</label>
        <textarea
          type='text'
          name='firstName'
          placeholder='firstName'
          value={this.state.firstName}
          onChange={this.handleChange}
          />

        <label>Last Name</label>
        <textarea
          type='text'
          name='lastName'
          placeholder='lastName'
          value={this.state.lastName}
          onChange={this.handleChange}
          />

          <label>City</label>
          <textarea
            type='text'
            name='city'
            placeholder='city'
            value={this.state.city}
            onChange={this.handleChange}
            />

          <label>State</label>
          <textarea
            type='text'
            name='state'
            placeholder='state'
            value={this.state.state}
            onChange={this.handleChange}
            />

          <label>city</label>
          <textarea
            type='text'
            name='city'
            placeholder='city'
            value={this.state.city}
            onChange={this.handleChange}
            />

          <label>Donation Goal</label>
          <textarea
            type='number'
            name='donationGoal'
            placeholder='donation goal'
            value={this.state.donationGoal}
            onChange={this.handleChange}
            />

          <label>Money Spent</label>
          <textarea
            type='number'
            name='moneySpent'
            placeholder='money spent'
            value={this.state.moneySpent}
            onChange={this.handleChange}
            />

          <label>Bio</label>
          <textarea
            type='text'
            name='bio'
            placeholder='describe yourself'
            value={this.state.bio}
            onChange={this.handleChange}
            />

        <button type='submit'> {this.props.profile ? 'update' : 'create'} profile </button>
      </form>
    )
  }
}

export default ProfileForm
