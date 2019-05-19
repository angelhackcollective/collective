import React from 'react';
import splash from './background.png';
import { withRouter } from 'react-router-dom';
import {
  Wrapper,
  Hero,
  Btn,
} from './styles';

const Landing = ({history}) => {
  return (
    <Wrapper src={splash}>
      <Hero>
        <h1>Sick of unexpected side effects of birth control?</h1>
        <p>Read experiences provided by women like you to find your best fit.</p>
        <hr />
        <Btn onClick={() => history.push("/signup")}>Start Now</Btn>
      </Hero>
    </Wrapper>
  )
};

export default withRouter(Landing);