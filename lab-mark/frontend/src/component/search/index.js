import React from 'react'
import {connect} from 'react-redux'
import Charity from '../charity'
import SearchForm from '../search-form'
import * as charity from '../../action/charity.js'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(query) {
    this.props.search(query)
  }

  render(){

    let {charities} = this.props
    let count = Math.floor(charities.count / 10)
    return (
      <div className='search'>
        <h2> Search for Charities </h2>
        <SearchForm onComplete={this.handleSearch} />
        {charities.data.map((charity, i) =>
          <Charity
            charity={charity}
            key={i}
          />
        )}
        {charities.data.length ?
          <p> <button onClick={() => {this.handleSearch(charities.links.prev)}}>Previous</button>
            <button onClick={() => {this.handleSearch(charities.links.next)}}>Next</button>
            <button onClick={() => {this.handleSearch(charities.links.last)}}>Last</button> </p>
          : <p> No results </p>}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  charities: state.charities,
})

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(charity.search(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
