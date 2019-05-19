import React from 'react';
import Symptoms from '../../components/Symptoms';

const MedicationView = ({history}) => {
  console.log("TODO", "set up medication view", history)
  const { medication } = history.location.state
  console.log(medication)
  return (
    <div>
      <h1>{medication.name}</h1>
      <Symptoms
        {...medication}
      />
    </div>
  )
};

export default MedicationView;
