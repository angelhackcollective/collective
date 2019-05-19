import React, { useState } from 'react';
import Filter from '../../components/Filter';
import Medications from '../../components/Medications';
import data from '../../components/Medications/data';
import SymptomsModal from '../../components/Symptoms/SymptomsModal';
import Button from '../../styledComponents/Button';
import { HeadWrapper } from '../../styledComponents/Header';
import styled from 'styled-components';
import { filter } from 'rsvp';
import seedData from '../../seedData'

// TODO GET MEDICATIONS
const BrowseList = () => {

  const [modalOpen, toggleModal] = useState(false);
  const [filters, setFilters] = useState([]);
  const [medications, setMedications] = useState(seedData)
  const [filteredMedications, filteredMeds] = useState(medications)

  const updateFilters = (filters) => {
    let filtersObject = {}
    filtersObject = filters.reduce((accumulator, filter) => {
      if (filter === "Low" || filter === "Medium" || filter === "High") {
        if (!accumulator.effort) {
          accumulator['effort'] = []
        }
        accumulator['effort'].push(filter)
      }

      if (filter === "99%" || filter === "91-94%" || filter === "72-82%") {
        if (!accumulator.efficacy) {
          accumulator['efficacy'] = []
        }
        accumulator['efficacy'].push(filter)
      }

      return accumulator
    }, {})

    let medicationsFiltered = []
    medicationsFiltered = seedData.reduce((accumulator, med) => {
      if (filtersObject.effort && filtersObject.effort.includes(med.efforts)) {
        accumulator.push(med)
      }

      if (filtersObject.efficacy && filtersObject.efficacy.includes(med.efficacy)) {
        accumulator.push(med)
      }

      return accumulator
    }, [])

    if (!medicationsFiltered.length) {
      setMedications(seedData)
    }
    setMedications(medicationsFiltered)
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