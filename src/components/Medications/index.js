
import React from 'react';
import { CardContainer } from '../../styledComponents/Card';
import MedicationCard from './MedicationCard';
import { withRouter } from 'react-router-dom';

const Medications = ({medications, history}) => {
  console.log("medications", medications)
    return medications.map((info, i) => {
      return (
        <CardContainer key={i} onClick={() => history.push({
          pathname: `/browse/${info.name}`,
          state: {medication: info},
        })}>
          <MedicationCard  info={info}/>
        </CardContainer>
      );
    })
  }

export default withRouter(Medications);
