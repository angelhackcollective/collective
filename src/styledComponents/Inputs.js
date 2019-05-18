import styled from 'styled-components';
import React from 'react';
import { colors } from './index';

const StyledInput = styled.input`
  height: 40px;
  background-color: ${colors.white};
  border-radius: 2px;
  border: solid 1px ${colors.blue};
  font-size: 14px;
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

const TextInput = ({label, name, ...rest}) => {
  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput name={name} {...rest} />
    </InputWrapper>
  )
};

export { TextInput };




