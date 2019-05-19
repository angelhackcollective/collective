import React, { useState } from 'react';
import Symptoms from '../../components/Symptoms';
import Button from '../../styledComponents/Button';
import { SimilarLarge } from '../../styledComponents/Similar';
import { HeadWrapper } from '../../styledComponents/Header';
import SymptomsModal from '../../components/SymptomsModal';
import { Link } from 'react-router-dom';
import { Card } from './styles';

const MedicationView = ({history}) => {
  const [modalOpen, toggleModal] = useState(false);
  console.log("TODO", "set up medication view", history)
  const { medication } = history.location.state
  console.log(medication)
  return (
    <div>
      <SymptomsModal
        open={modalOpen}
        toggleModal={toggleModal}
      />
      <HeadWrapper>
        <Link to="/browse">Back to list</Link>
        <Button color="red" onClick={() => toggleModal(!modalOpen)}>Report Side Effect</Button>
      </HeadWrapper>
      <Card>
        <div className="titleRow">
          <h1>{medication.name}</h1>
          <p>100 reports, 20 similar</p>
        </div>
        <div className="filterRow">
          <div className="filterPair">
            <p className="type">Type</p>
            <p className="name">{medication.type}</p>
          </div>
          <div className="filterPair">
            <p className="type">Effort</p>
            <p className="name">{medication.efforts}</p>
          </div>
          <div className="filterPair">
            <p className="type">EFFICACY</p>
            <p className="name">99%</p>
          </div>
        </div>
        <SimilarLarge />
        <Symptoms
          {...medication}
        />
      </Card>
    </div>
  )
};

export default MedicationView;
