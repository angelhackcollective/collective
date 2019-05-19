import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import BrowseList from './pages/BrowseList';
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';
import Section from './styledComponents/Section';
import Container from './styledComponents/Container';
import ResultsPage from './pages/ResultsPage';
import { Header } from './styledComponents/Header';
import { NavContainer } from './styledComponents/NavContainer';

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
      <ResultsPage />
    </Fragment>
  );
}

export default App;

