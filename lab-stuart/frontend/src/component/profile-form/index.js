import React from 'react';

let emptyState = {
  firstName: '',
  firstNameDirty: false,
  firstNameError: 'First name is required.',
  lastName: '',
  lastNameDirty: false,
  lastNameError: 'Last name is required.',
};

class ProfileForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.profile ? {...emptyState, ...props.profile} : emptyState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleValidate = this.handleValidate.bind(this);
  };

  componentWillReceiveProps(props){
    if(props.profile)
      this.setState(props.profile);
  };

  handleChange(e){
    let {name, value} = e.target;
    this.setState({
      [name]: value,
      [name+'Dirty']: true,
      [name+'Error']: this.handleValidate(e.target),
    });
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  };

  handleValidate({type, placeholder, value}){
    switch(type){
      case 'text':
        if(value.length === 0)
          return placeholder + ' is required.'
        return null
      default:
        return null
    }
  }

  render(){
    return (
      <form
        className='profile-form'
        onSubmit={this.handleSubmit}>

        <p>{this.state.firstNameError}</p>
        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          name='firstName'
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder='First Name'
          />

          <p>{this.state.lastNameError}</p>
          <label htmlFor='lastName'>Last Name</label>
          <input
            id='lastName'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder='Last Name'
            />

        <button type='submit'>{this.props.profile ? 'update' : 'create'} profile</button>
      </form>
    )
  }
};

export default ProfileForm;
