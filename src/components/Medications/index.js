
import React from 'react';
import { CardContainer } from '../../styledComponents/Card';
import data from './data';
import MedicationCard from './MedicationCard';

const Medications = (props) => {
    return data.map((info, i) => {
      return (
        <CardContainer key={i}>
          <MedicationCard  info={info}/>
        </CardContainer>
      );
    })
  }

export default Medications;
