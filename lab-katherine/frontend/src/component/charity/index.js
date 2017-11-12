import './_charity.scss';
import React from 'react';
import * as util from '../../lib/util.js';

class Charity extends React.Component {
  render(){
    let {
      charity
    } = this.props;

    return (
      <div className='charity'>
        <h2> Charities </h2>
          <div>
            <img style={{width: '200px'}} src={charity.photoURL} />
            <p>Name: {charity.name}</p>
            <p>Address: {charity.streetAdd} </p>
            <p>State: {charity.state} </p>
            <p>Mission: {charity.mission} </p>
            <p>Cause: {charity.cause} </p>
            <p>Rating: {charity.rating} </p>
            <p>Website: {charity.websiteURL} </p>
            <p>Category: {charity.category} </p>
            <p>Phone #: {charity.phoneNumber} </p>
            <p>Email: {charity.email} </p>
          </div>
      </div>
    )
  }
}

export default Charity
