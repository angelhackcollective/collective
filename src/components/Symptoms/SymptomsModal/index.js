import React, { useState } from 'react';
import Modal from '../../Modal';
import SymptomForm from './SymptomForm';
import SuccessMessage from './SuccessMessage';

const SymptomModal = ({ open, toggleModal }) => {
  const [formComplete, setComplete] = useState(false)
  console.log(typeof toggleModal)

  const closeForm = () => {
    setComplete(false)
    toggleModal()
  }

  return (
    <Modal
      open={open}
      toggleModal={toggleModal}
    >
      {
        formComplete ? (
          <SuccessMessage
            closeModal={closeForm}
          />
        ) : (
          <SymptomForm
            completed={formComplete}
            completeForm={setComplete}
          />
        )
      }
    </Modal>
  )
};

export default SymptomModal;