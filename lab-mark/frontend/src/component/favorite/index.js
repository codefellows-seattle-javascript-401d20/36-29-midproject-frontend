import React from 'react'
import * as util from '../../lib/util.js'

class Favorite extends React.Component {

  render(){
    let {
      favorite,
    } = this.props

    return (
      <div className='favorite'>
        <p><strong>Organization:</strong> {favorite.charity.name} </p>
      </div>
    )
  }
}

export default Favorite
