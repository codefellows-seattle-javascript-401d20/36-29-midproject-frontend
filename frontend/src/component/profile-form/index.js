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
    let {name, value} = e.target;
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

        <textarea
          name='firstName'
          value={this.state.firstName}
          onChange={this.handleChange}
          />

        <textarea
          name='lastName'
          value={this.state.lastName}
          onChange={this.handleChange}
          />

        <button type='submit'> {this.props.profile ? 'update' : 'create'} profile </button>
      </form>
    )
  }
}

export default ProfileForm
