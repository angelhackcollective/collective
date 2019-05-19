import axios from "axios";
import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { NavContainer, Link, LinkContainer } from '../../styledComponents/NavContainer';

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
      <NavContainer>
        <h3>
          co<span>llective</span>
        </h3>
        <div>
          {localStorage.token ? (
              <button type="button" onClick={this.logout}>
                Logout
              </button>
          ) : (
            <LinkContainer>
                <Link to="/signup">Sign Up/</Link>
                <Link to="/login">Login</Link>
            </LinkContainer>
          )}
        </div>
        </NavContainer>
    );
  }
}

export default withRouter(Navbar);
