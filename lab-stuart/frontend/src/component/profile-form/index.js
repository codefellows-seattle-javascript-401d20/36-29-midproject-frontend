import React from 'react'

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
  };

  componentWillReceiveProps(props){
    if(props.profile)
      this.setState(props.profile);
  };

  handleChange(e){
    let {value} = e.target;
    this.setState({
      firstName: value,
      firstNameDirty: true,
      firstNameError: value ? null : emptyState.firstNameError,
      lastName: value,
      lastNameDirty: true,
      lastNameError: value ? null : emptyState.lastNameError,
    });
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  };


  render(){
    return (
      <form
        className='profile-form'
        onSubmit={this.handleSubmit}>

        <label htmlFor='firstName'>First Name</label>
        <input
          id='firstName'
          name='firstName'
          value={this.state.firstName}
          onChange={this.handleChange}
          />

          <label htmlFor='lastName'>Last Name</label>
          <input
            id='lastName'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
            />

        <button type='submit'>{this.props.profile ? 'update' : 'create'} profile</button>
      </form>
    )
  }
};

export default ProfileForm;
