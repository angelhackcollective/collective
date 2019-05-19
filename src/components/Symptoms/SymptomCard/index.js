import React from 'react';
import { Wrapper } from './styles';

const SymptomCard = ({name, date, ethnicity, yearsOld, description, color, ...props}) => {
  console.log("Other Props", props)
  return (
    <Wrapper color={color}>
      <div className="logoContainer">
        <p className="logo">{name[0]}</p>
      </div>
      <div className="container">
        <p>{name}</p>
        <div className="dates">
          <p>{date}</p>
          <p>{ethnicity}, {yearsOld} years old</p>
        </div>
        <div className="details">
          <p>{description}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default SymptomCard;