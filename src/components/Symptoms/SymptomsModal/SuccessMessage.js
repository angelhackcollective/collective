import React from 'react';
import Button from '../../../styledComponents/Button';
import { colors } from '../../../styledComponents/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header, HeaderWrapper, SuccessWrapper } from './styles';

const SuccesMessage = (props) => {
  console.log(props)
  return (
    <SuccessWrapper>
      <div className="iconWrapper">
        <FontAwesomeIcon icon="heart" className="heart-icon"/>
      </div>
      <HeaderWrapper>
        <Header>Thank you for your reported experience!</Header>
        <p>You’ll see your report in a couple days.</p>
      </HeaderWrapper>
      <Button onClick={() => props.closeModal()}>Back to List</Button>
    </SuccessWrapper>

  )
};

export default SuccesMessage;
