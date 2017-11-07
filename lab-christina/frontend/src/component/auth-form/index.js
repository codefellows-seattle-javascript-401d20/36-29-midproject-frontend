import React from 'react'
import * as util from '../../lib/util.js'
import validator from 'validator'

let emptyState = {
  firstName: '',
  firstNameDirty: false,
  firstNameError: 'First name is required',
  lastName: '',
  lastNameDirty: false,
  lastNameError: 'Last name is required',
  city: '',
  cityDirty: false,
  state: '',
  stateDirty: false,
  donationGoal: '',
  donationGoalDirty: false,
  moneySpent: '',
  moneySpentDirty: false,
  username: '',
  usernameDirty: false,
  usernameError: 'username is required',
  email: '',
  emailDirty: false,
  emailError: 'email is required',
  password: '',
  passwordDirty: false,
  passwordError: 'password is required',
  submitted: false,
};

class AuthForm extends React.Component {
  constructor(props){
    super(props)
    this.state = emptyState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateChange = this.validateChange.bind(this);
  }

  validateChange(name, value){
    if(this.props.type === 'login')
      return null
    switch (name) {
      case 'firstName':
        if(!validator.isEmail(value))
          return 'You must provide a first name'
        break;
        case 'LastName':
          if(!validator.isEmail(value))
            return 'You must provide a flast name'
          break;
      case 'username':////RESTART HERE///////
        if(value.length < 6)
          return 'Your username must be 6 characters'
        if(!validator.isAlphanumeric(value))
          return 'Must only contain numbers and letters'
        break;
      case 'email':
        if(!validator.isEmail(value))
          return 'you must provide a valid email'
        break;
      case 'password':
        if(value.length < 8)
          return 'Password must be at least 8 characters long'
        if(!validator.isAlphanumeric(value))
          return 'Your password may only contain numbers and letters'
        break;
      default:
        return null
    }
  }

  handleChange(event){
    let { name, value } = event.target;
    this.setState({
      [name]: value,
      [`${ name }Dirty`]: true,
      [`${ name }Error`]: this.validateChange(name, value),
    });
  };

  handleSubmit(event){
    event.preventDefault();
    let { nameError, emailError, passwordError } = this.state
    if(this.props.type === 'login' || !nameError && !emailError && !passwordError){
      this.props.onComplete(this.state)
      this.setState(emptyState)
    } else {
      this.setState({
        submitted: true,
        usernameDirty: true,
        emailDirty: true,
        passwordDirty: true,
      })
    }
  };

  render(){
    let {
      type,
    } = this.props

    type = type === 'login' ? type : 'signup';

    return (
      <form
        className='auth-form'
        noValidate
        onSubmit={ this.handleSubmit } >

        {util.renderIf(this.state.usernameDirty,
        <p> { this.state.usernameError } </p>)}

        <input
          className = {util.renderIf(this.state.usernameDirty && this.state.usernameError, 'invalid')}
          name='username'
          placeholder='username'
          type='text'
          value={ this.state.username }
          onChange={ this.handleChange }
          />

        {util.renderIf(type !== 'login',
          <div>
          {util.renderIf(this.state.emailDirty,
            <p> { this.state.emailError } </p>)}
            <input
            className = {util.renderIf(this.state.emailDirty && this.state.emailError, 'invalid')}
              name='email'
              placeholder='email'
              type='email'
              value={ this.state.email }
              onChange={ this.handleChange }
              />
          </div>
        )}

        {util.renderIf(this.state.passwordDirty,
          <p> { this.state.passwordError } </p>)}
        <input
        className = {util.renderIf(this.state.passwordDirty && this.state.passwordError, 'invalid')}
          name='password'
          placeholder='password'
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
          />

        <button type='submit'>{type}</button>
      </form>
    )
  }
}

export default AuthForm;
