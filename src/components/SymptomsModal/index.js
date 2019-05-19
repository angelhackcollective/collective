import React from 'react';
import Modal from './Modal';
import SymptomForm from './SymptomForm';

const SymptomModal = ({ open, toggleModal }) => (
  <Modal
    open={open}
    toggleModal={toggleModal}
  >
    <SymptomForm open={open} toggleModal={toggleModal}/>
  </Modal>
);

export default SymptomModal;