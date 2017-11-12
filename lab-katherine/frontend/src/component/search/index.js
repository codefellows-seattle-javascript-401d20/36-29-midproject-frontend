import React from 'react';
import {connect} from 'react-redux';
import Charity from '../charity';
import * as charity from '../../action/charity.js';

class Search extends React.Component {
  render() {
    let {
      charities,
    } = this.props;

    return (
      <div>
        <h2>Search</h2>
        {charities.map((charity, i) =>
        <Charity
          charity={charity}
          key={i}
        />
      )}
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  charities: state.charities,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
