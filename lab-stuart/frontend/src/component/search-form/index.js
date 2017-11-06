import React from 'react';
import * as util from '../../lib/util.js';

let emptyState = {
  state: '',
  stateDirty: false,
  stateError: 'Please select a state.',
};

class SearchForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.query ? {...emptyState, ...props.query} : emptyState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleValidate = this.handleValidate.bind(this);
  };

  componentDidMount(){
    console.log('mounted');
  }

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
        className='search-form'
        onSubmit={this.handleSubmit}>

        {util.renderIf(this.state.stateError,
          <p>{this.state.stateError}</p>
        )}
        <label htmlFor='state'>State</label>
        <input
          id='state'
          name='state'
          value={this.state.state}
          onChange={this.handleChange}
          placeholder='State'
          />

        <p>
          <button type='submit'>search</button>
        </p>
      </form>
    )
  }
};

export default SearchForm;
