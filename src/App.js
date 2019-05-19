import React, { Fragment } from 'react';
import { Switch } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import BrowseList from './pages/BrowseList';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';
import DefaultLayout, { HomePage } from './components/Layout';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <HomePage exact path="/" component={Landing} />
        <AuthRoute exact path="/browse" component={BrowseList} />
        <DefaultLayout exact path="/login" component={Login} />
        <DefaultLayout exact path="/signup" component={Signup} />
      </Switch>
    </Fragment>
  );
}

export default App;

