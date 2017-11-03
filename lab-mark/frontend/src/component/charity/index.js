import React from 'react'
import * as util from '../../lib/util.js'

class Charity extends React.Component {

  render(){
    let {
      charity,
    } = this.props

    return (
      <div className='charity'>
        <p><strong>Organization:</strong> {charity.name} </p>
        <p><strong>Address:</strong> {charity.streetAdd}, {charity.city}, {charity.state}, {charity.zip} </p>
        <p><strong>Mission:</strong> {charity.mission} </p>
        <p><strong>Cause:</strong> {charity.cause} </p>
      </div>
    )
  }
}

export default Charity
