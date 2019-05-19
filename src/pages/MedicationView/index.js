import React from 'react';
import Symptoms from '../../components/Symptoms';
import { SimilarLarge } from '../../styledComponents/Similar';

const MedicationView = ({history}) => {
  console.log("TODO", "set up medication view", history)
  const { medication } = history.location.state
  console.log(medication)
  return (
    <div>
      <h1>{medication.name}</h1>
      <SimilarLarge />
      <Symptoms
        {...medication}
      />
    </div>
  )
};

export default MedicationView;
