import React from 'react'

let emptyState = {
  firstName: '',
  firstNameDirty: true,
  firstNameError: 'First name required!',
  lastName: '',
  lastNameDirty: true,
  lastNameError: 'Last name required!',
  city: '',
  cityDirty: true,
  cityError: '',
  state: '',
  stateDirty: true,
  stateError: '',
  bio: '',
  bioDirty: true,
  bioError: '',
}

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.profile ? {...emptyState, ...props.profile} : emptyState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(props) {
    if(props.profile)
      this.setState(props.profile)
  }

  handleChange(event){
    let  { name, value, type } = event.target
    value = type === 'number' ? Number(value) : value
    this.setState({
      [name]: value,
      [`${name}Dirty`]: true,
      [`${name}Error`]: value ? null : emptyState[`${ name }Error`],
    });
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
               type='text'
               name='firstName'
               placeholder='First Name'
               value={ this.state.firstName }
               onChange={ this.handleChange }
               />

             <textarea
               type='text'
               name='lastName'
               placeholder='LastName'
               value={ this.state.lastName }
               onChange={ this.handleChange }
               />

               <textarea
                 type='text'
                 name='city'
                 placeholder='City'
                 value={ this.state.city }
                 onChange={ this.handleChange }
                 />

               <textarea
                 type='text'
                 name='state'
                 placeholder='State'
                 value={ this.state.state }
                 onChange={ this.handleChange }
                 />

               <textarea
                 type='text'
                 name='bio'
                 placeholder='Personal bio'
                 value={ this.state.bio }
                 onChange={ this.handleChange }
                 />

             <button type='submit'> { this.props.profile ? 'update' : 'create' } profile </button>
           </form>

    )
  }
}

export default ProfileForm
