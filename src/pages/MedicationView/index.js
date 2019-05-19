import React, { useState } from 'react';
import Symptoms from '../../components/Symptoms';
import Button, { OutlinedButton } from '../../styledComponents/Button';
import { SimilarLarge } from '../../styledComponents/Similar';
import { HeadWrapper } from '../../styledComponents/Header';
import SymptomsModal from '../../components/Symptoms/SymptomsModal';
import { Link } from 'react-router-dom';
import { Card, Percent, SideEffects, Experiences } from './styles';

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
        <div className="summaryRow">
          <div className="your-summary">
            <h2 className="section-title">Your Summary</h2>
            <p>Similar women reported 46% less negative side effects (reported 5 or more) than all reported women .</p>
          </div>
          <div className="graph">
            <h2 className="section-title">REPORTED 5+ NEG. SIDE EFFECTS</h2>
            <Percent percent="20%">
              <p>20% of Women similar to you</p>
              <div className="line">
                <div className="bg">&nbsp;</div>
              </div>
            </Percent>
            <Percent percent="66%">
              <p>66% from All Women</p>
              <div className="line">
                <div className="bg">&nbsp;</div>
              </div>
            </Percent>
          </div>
        </div>
        <SideEffects>
          <h2 className="section-title">Commonly Reported Side Effects:</h2>
          <div className="sideEffects">
            {
              medication.symptoms.map((item,i) => (
                <p key={i} className="side_effect">{item}, </p>
              ))
            }
          </div>
        </SideEffects>
        <Experiences>
          <div className="header">
            <h2 className="section-title">Commonly Reported Side Effects:</h2>
            <div className="sortContainer">
              <p>Sort by:</p>
              <OutlinedButton>All Women</OutlinedButton>
            </div>
          </div>
        </Experiences>
        <Symptoms
          {...medication}
        />
      </Card>
    </div>
  )
};

export default MedicationView;
