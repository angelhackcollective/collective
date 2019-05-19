import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Hero,
  Btn,
} from './styles';

const Landing = ({history}) => {
  return (
    <Hero>
      <h1>Sick of unexpected side effects of birth control?</h1>
      <p>Read experiences provided by women like you to find your best fit.</p>
      <hr />
      <Btn onClick={() => history.push("/signup")}>Start Now</Btn>
    </Hero>
  )
};

export default withRouter(Landing);