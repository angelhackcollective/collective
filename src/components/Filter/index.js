import React, { Component, Fragment } from 'react';
import Button from '../../styledComponents/Button';
import {
  HeadWrapper,
  FilterContainer,
  Filters,
  BtnWrapper,
} from './styles';
import filterData from './filterData';
import FilterItem from './FilterItem';

class Filter extends Component {
  render() {
    return (
      <div>
        <HeadWrapper>
          <h1>Birth Control Options</h1>
          <Button color="red">Report Side Effect</Button>
        </HeadWrapper>
        <FilterContainer>
          <Filters>
            {filterData.map((item, i) => <FilterItem {...item} key={i}/>)}
          </Filters>
          <BtnWrapper>
            <Button>Filter</Button>
          </BtnWrapper>
        </FilterContainer>
      </div>
    );
  }
}

export default Filter;