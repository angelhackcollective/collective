import React from 'react';
import {
  FilterWrapper,
  FilterBtnWrapper,
  CheckWrapper,
} from './styles';

const CheckBox = ({name, val, subOpts}) => {
  console.log(subOpts)
  return (
  <CheckWrapper>
    <input name={val} type="checkbox" />
    <label>{name}</label>
    {/* { subOpts && subOpts.map((sub, i) => (
      <div key={i}>Sub</div>
    ))} */}
  </CheckWrapper>
)}

const FilterItem = ({title, opts}) => {
  return (
    <FilterWrapper>
      <h2>{title}</h2>
      <FilterBtnWrapper>
        {
          opts.map((option, i) => (
            <CheckWrapper key={i}>
              <CheckBox {...option}/>
            </CheckWrapper>
          ))
        }
      </FilterBtnWrapper>
    </FilterWrapper>
  )
}

export default FilterItem;