import React from 'react';
import {
  FilterWrapper,
  FilterBtnWrapper,
} from './styles';
import CheckBox from '../CheckBox';

const FilterItem = ({title, opts, add, remove}) => {
  console.log("OPTS", opts)
  return (
    <FilterWrapper>
      <h2>{title}</h2>
      <FilterBtnWrapper>
        {
          opts.map((option, i) => (
            <CheckBox key={i} {...option} add={add} remove={remove} />
          ))
        }
      </FilterBtnWrapper>
    </FilterWrapper>
  )
}

export default FilterItem;