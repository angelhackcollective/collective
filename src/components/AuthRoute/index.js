import React from "react";
import { Route, Redirect } from "react-router-dom";
import Section from '../../styledComponents/Section';
import Container from '../../styledComponents/Container';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.token ? (
        <Section dark>
          <Container>
            <Component {...props} />
          </Container>
        </Section>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default AuthRoute;