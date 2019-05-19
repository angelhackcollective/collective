import styled from 'styled-components';
import React from 'react';
import Caret from '../components/Icons/Caret';
import { colors } from './index';

const defaultInputStyles = () => `
  -webkit-appearance: none;
  height: 40px;
  background-color: ${colors.white};
  border-radius: 2px;
  border: solid 1px ${colors.blue};
  font-size: 14px;
  box-shadow: none;
  cursor: pointer;
  width: 100%;

  :focus {
    outline: none;
    box-shadow: inset 0 -1px 0 0 ${colors.blue};
  }
`;

const StyledInput = styled.input`
  ${() => defaultInputStyles()}
`;

const Label = styled.label`
  font-family: Lato;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${colors.blue};
  margin-bottom: 5px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 270px;
`;

const SelectInput = styled.select`
  ${() => defaultInputStyles()}
  background: none;
  :focus {
    outline: none;
    box-shadow: none;
  }
`;

const TextArea = styled.textarea`
  ${() => defaultInputStyles()}

  border: 1px solid ${colors.blue};
  cols: ${props => props.cols ? props.cols : undefined};
  rows: ${props => props.rows ? props.rows : undefined};
`;

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;

  select {
    margin-bottom: 0;
  }

  svg {
    position: absolute;
    right: 0;
    transform: rotate(180deg);
  }
`;

const Input = ({label, name, ...rest}) => {
  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput name={name} {...rest} />
    </InputWrapper>
  )
};

const Select = ({ children, value, name, onChange, className }) => (
  <SelectContainer className={className}>
    <Caret
      fill={colors.blue}
      stroke={colors.blue}
      width="10px"
      height="100%"
    />
    <SelectInput name={name} value={value} onChange={onChange}>
      {children}
    </SelectInput>
  </SelectContainer>
);

export { Label, Input, Select, TextArea };




