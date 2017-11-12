import React from 'react'
import { connect } from 'react-redux'
import * as util from '../../lib/util.js'
import * as charitiesList from '../../action/charity'


class Charities extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCharities()
      .catch(console.error)
  }

  componentWillReceiveProps(){
  }

  render() {
    console.log('--> CHARITIES:', this.props)
    return (
      <div className='charities'>
        <p>charities here</p>
      </div>
    )
  }
}

//TODO: fetching charities at some point in time 

const mapStateToProps = (state) => ({ charities: state.charitiesList })

const mapDispatchToProps = (dispatch) => ({
  fetchCharities: () => dispatch(charitiesList.fetch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Charities)