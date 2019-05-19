import styled from 'styled-components';
import React from 'react';
import { colors } from './index';

const PillWrapper = styled.div`
  border-radius: 8px;
  background-color: ${({color}) => color ? colors[color] : "#e5f2ff"};
  display: flex;
  flex-direction: row;
  padding: 4px 10px;
  min-width: 55px;
  height: 1rem;
  margin-right: 10px;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: lato;
    font-size: 15px;
    color: ${colors.blue};
    margin: 0;
  }
`;

const Pill = ({name, val, color, func, ...rest}) => {
  return (
    <PillWrapper color={color}>
      <p className="name">{name}</p>
      <p className="close" onClick={() => func(val)}>X</p>
    </PillWrapper>
  )
};

export default Pill;
export { PillWrapper }

