import React from "react";
import Section from '../../styledComponents/Section';
import Container from '../../styledComponents/Container';
import HomePage from './HomePage';
import { Route } from "react-router-dom";

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Section dark>
        <Container>
          <Component {...props} />
        </Container>
      </Section>
    )}
  />
);

export default DefaultLayout;
export { HomePage };