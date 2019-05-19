import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import BrowseList from './pages/BrowseList';
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';
import Section from './styledComponents/Section';
import Container from './styledComponents/Container';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Section dark>
        <Container>
          <Switch>
            <AuthRoute exact path="/" component={BrowseList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Container>
      </Section>
    </Fragment>
  );
}

export default App;

