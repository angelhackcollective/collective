import axios from "axios";
import React, { Component, Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
// import "./navbar.css";
import { NavContainer } from '../../styledComponents/NavContainer';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logout = this.logout.bind(this);
  }

  logout() {
    const { history } = this.props;
    // await axios.delete("/api/auth/logout");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    history.push("/login");
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps, this.props);
  };


  render() {
    return (
      <div id="navbar">
      <NavContainer>
        <h3>
          <NavLink to="/">Home </NavLink>
          {localStorage.username && localStorage.username}
        </h3>
        <ul>
          {localStorage.token ? (
            <li className="navbar-links">
              <button type="button" onClick={this.logout}>
                Logout
              </button>
            </li>
          ) : (
            <Fragment>
              <li className="navbar-links">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className="navbar-links">
                <NavLink to="/signup">Register</NavLink>
              </li>
            </Fragment>
          )}
        </ul>
        </NavContainer>
      </div>
    );
  }
}

export default withRouter(Navbar);
