import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { Wrapper } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

ReactModal.setAppElement('#root');

const Modal = ({ open, toggleModal, label, children }) => (
  <ReactModal
    isOpen={open}
    style={{
      overlay: {
        zIndex: 1,
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
      },
      content: {
        width: '240px',
        height: '360px',
        left: 0,
        right: 0,
        top: '150px',
        margin: '0 auto',
        padding: 0,
        background: 'none',
        border: 'none',
        borderRadius: 0,
      },
    }}
    closeTimeoutMS={0}
    contentLabel={label}
    ariaHideApp={true}
    shouldFocusAfterRender={true}
    shouldCloseOnEsc={true}
    onRequestClose={() => toggleModal(!open)}
    shouldReturnFocusAfterClose={true}
    role="dialog"
    >
      <Wrapper>
        <FontAwesomeIcon icon="times" className="close" onClick={() => toggleModal(!open)}/>
        {children}
      </Wrapper>
    </ReactModal>
);

export default Modal;

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  label: PropTypes.string,
  children: PropTypes.array.isRequired,
};

