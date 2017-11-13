import React from 'react'
import * as util from '../../lib/util.js'

class PhotoForm extends React.Component {
  constructor(props){
    super(props)
    this.emptyState = {
      preview: '',
      photo: '',
      photoDirty: false,
      photoError: 'Photo is required',
      description: '',
      descriptionDirty: false,
      descriptionError: 'Description is required'
    }

    this.state = this.emptyState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleValidate = this.handleValidate.bind(this)
  }

  handleValidate({ type, value, files }) {
    switch(type) {
      case 'file':
        if(files.length < 1 )
          return 'You must choose a file.'
        let imageType = files[0].type
        let validImageTypes = ['image/png', 'image/jpeg', 'image/jpg']
        if(!validImageTypes.includes(imageType))
          return 'Must be an image of type png or jpeg.'
          return null
    }
  }

  handleChange(event){
    let { type, value, files } = event.target
    if(type === 'file') {
    let error = this.handleValidate(event.target)
    if(!error) {
      util.fileToDataURL(files[0])
      .then(preview => this.setState({ preview }))
    }
    this.setState({
      photo: files[0],
      photoError: error,
      photoDirty: true,
    })
  } else {
    this.setState({
      description: value,
      descriptionError: this.handleValidate(event),
      descriptionDirty: true,
    })
  }
}

  handleSubmit(event){
    event.preventDefault()
    this.props.onComplete(this.state)
    this.setState(this.emptyState)
  }

  render(){
    return (
      <form
        onSubmit={ this.handleSubmit }
        className='photo-form'>
        <img style={{width:'60%'}} src={ this.state.preview }/>

        <p> { this.state.photoError } </p>
        <input
          type='file'
          name='photo'
          onChange={ this.handleChange }
          />
        <input
          type='text'
          name='description'
          placeholder='Write a short description'
          value={ this.state.description }
          onChange={ this.handleChange }
          />

        <button type='submit'> Upload Photo </button>
      </form>
    )
  }
}

export default PhotoForm
