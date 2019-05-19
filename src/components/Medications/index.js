
import React from 'react';
import { CardContainer } from '../../styledComponents/Card';
import MedicationCard from './MedicationCard';

const Medications = ({medications}) => {
    return medications.map((info, i) => {
      return (
        <CardContainer key={i}>
          <MedicationCard  info={info}/>
        </CardContainer>
      );
    })
  }

export default Medications;
