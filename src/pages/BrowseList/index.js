import React, { useState } from 'react';
import Filter from '../../components/Filter';
import Medications from '../../components/Medications';
import data from '../../components/Medications/data';
import SymptomsModal from '../../components/SymptomsModal';
import Button from '../../styledComponents/Button';
import { HeadWrapper } from '../../styledComponents/Header';
import styled from 'styled-components';

// TODO GET MEDICATIONS
const BrowseList = () => {
  const [modalOpen, toggleModal] = useState(false);
  const [filters, setFilters] = useState([]);
  const [medications, setMedications] = useState(data)
  console.log(data)

  const updateFilters = (filters) => {
    console.log("SETTING MEDICATION FILTERS", filters)
  }

  return (
    <div>
      <SymptomsModal
        open={modalOpen}
        toggleModal={toggleModal}
      />
      <HeadWrapper>
        <h1>Birth Control Options</h1>
        <Button color="red" onClick={() => toggleModal(!modalOpen)}>Report Side Effect</Button>
      </HeadWrapper>
      <Filter updateFilters={updateFilters} />
      <Medications medications={medications} />
    </div>
  );
}

export default BrowseList;