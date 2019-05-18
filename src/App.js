import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import BrowseList from './pages/BrowseList';
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';

function App() {
  return (
    <Fragment>
      <Navbar />
        <Switch>
          <AuthRoute exact path="/" component={BrowseList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
    </Fragment>
  );
}

export default App;
