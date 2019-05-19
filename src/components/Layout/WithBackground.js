import React from "react";
import { Route } from "react-router-dom";
import styled from 'styled-components';
import background from './background.png';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: unset;
`;

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Wrapper src={background}>
        <Component {...props} />
      </Wrapper>
    ) }
  />
);

export default DefaultLayout;