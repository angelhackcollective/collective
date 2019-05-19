import React, { Component } from 'react';
import Filter from '../../components/Filter';

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
      </div>
    );
  }
}

export default BrowseList;