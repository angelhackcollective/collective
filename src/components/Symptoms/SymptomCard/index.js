import React from 'react';
import { Wrapper } from './styles';
import { SimilarSmall } from '../../../styledComponents/Similar';

const SymptomCard = ({user, dateReported, ethnicity, age, experience, similar, ...props}) => {
  console.log("Other Props", props)
  return (
    <Wrapper color="blue">
      <div className="logoContainer">
        <p className="logo">{user[0]}</p>
      </div>
      <div className="container">
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <p>{user}</p>
          {similar && <SimilarSmall />}
        </div>
        <div className="dates">
          <p>{dateReported}</p>
          <p>{ethnicity}, {age} years old</p>
        </div>
        <div className="details">
          <p>{experience}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default SymptomCard;