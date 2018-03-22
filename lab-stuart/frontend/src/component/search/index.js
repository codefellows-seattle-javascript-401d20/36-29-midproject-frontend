import React from 'react';
import {connect} from 'react-redux';
import SearchForm from '../search-form';
import * as util from '../../lib/util.js';
import * as charitySearch from '../../action/charity-search.js';

class Search extends React.Component {
  constructor(props){
    super(props)
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(query){
    this.props.searchUpdate(query);
  };

  render(){
    let {
      charitySearch,
    } = this.props;

    return (
      <div>
        <h1>Search</h1>
        <SearchForm onComplete={this.handleSearch} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  query: state.charitySearch,
});

const mapDispatchToProps = (dispatch) => ({
  searchUpdate: (query) => dispatch(charitySearch.fetch(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
