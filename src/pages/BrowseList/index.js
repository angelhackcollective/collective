import React, { useState } from 'react';
import Filter from '../../components/Filter';
import Medications from '../../components/Medications';
import SymptomsModal from '../../components/SymptomsModal';
import Button from '../../styledComponents/Button';
import styled from 'styled-components';

const HeadWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;

  h1 {
    font-weight: bold;
    font-size: 18px;
    margin: 0;
  }
`;

const BrowseList = () => {
  const [modalOpen, toggleModal] = useState(false);
  const setFilters = (filters) => {
    console.log(filters)
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
        <Filter setFilters={setFilters} />
        <Medications />
      </div>
    );
}

export default BrowseList;