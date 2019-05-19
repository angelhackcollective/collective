import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import BrowseList from './pages/BrowseList';
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';
import { Header } from './styledComponents/Header';
import { NavContainer } from './styledComponents/NavContainer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <AuthRoute exact path="/" component={BrowseList} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Fragment>
  );
}

export default App;

