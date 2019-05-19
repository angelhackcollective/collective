import React from 'react';
import SymptomCard from './SymptomCard';

const Symptoms = ({symptoms}, props) => {
  console.log("TODO, build list of symptom cards", props)
  return (
    <div>
      <h3>A list of symptoms</h3>
      {/* {symptoms.map((item,i) => <SymptomCard symptom={symptom}/>)} */}
    </div>
  )
};

export default Symptoms;
