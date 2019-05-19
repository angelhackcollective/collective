import React, { Component } from 'react';
import Button from '../../styledComponents/Button';
import { OutlinedButton } from '../../styledComponents/Button';
import Pill from '../../styledComponents/Pill';
import Modal from '../Modal';
import {
  FilterContainer,
  Filters,
  BtnWrapper,
  SubFilter
} from './styles';
import filterData from './filterData';
import FilterItem from './FilterItem';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ["IUD", "IUS"],
    }
    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
  }

  addFilter(filter) {
    this.setState((state) => ({
      filters: [...state.filters, filter],
    }))
  }

  removeFilter(item) {
    const { filters } = this.state;
    const newList = filters.filter(fil => fil !== item)
    this.setState({
      filters: newList
    })
  }

  render() {
    const { filters } = this.state;
    return (
      <div>
        <FilterContainer>
          <Filters>
            {filterData.map((item, i) => <FilterItem remove={this.removeFilter} add={this.addFilter} {...item} key={i}/>)}
          </Filters>
          <BtnWrapper>
            <Button>Filter</Button>
          </BtnWrapper>
        </FilterContainer>
        <SubFilter>
          <div className="pillContainer">
            {filters.map((item, i) => <Pill key={i} name={item} val={item} func={this.removeFilter} />)}
          </div>
          <div className="sortContainer">
            <p>Sort by:</p>
            <OutlinedButton>Button</OutlinedButton>
          </div>
        </SubFilter>
      </div>
    );
  }
}

export default Filter;