import React, { useState } from 'react';
import Button from '../../styledComponents/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../Modal';

const SymptomModal = ({ open, toggleModal }) => (
  <Modal
    open={open}
    toggleModal={toggleModal}
  >
    <div>Hey</div>
    <Button onClick={() => toggleModal(!open)}>Close</Button>
  </Modal>
);

export default SymptomModal;