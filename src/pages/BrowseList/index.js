import React, { Component } from 'react';
import Filter from '../../components/Filter';
import Medications from '../../components/Medications';

class BrowseList extends Component {
  constructor(props) {
    super(props);
    this.setFilters = this.setFilters.bind(this);
  }

  setFilters(filters) {
    console.log(filters)
  }

  render() {
    return (
      <div>
        <Filter setFilters={this.setFilters} />
        <Medications />
      </div>
    );
  }
}

export default BrowseList;