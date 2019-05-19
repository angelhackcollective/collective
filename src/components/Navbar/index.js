import React, { Component } from "react";
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
    const { location } = this.props;
    return (
      <NavContainer>
        <div className="navWrapper">
          <h3>
            co<span>llective</span>
          </h3>
          <div>
            {localStorage.token ? (
                <button style={{color: "#fff", backgroundColor: "transparent", border: "none"}} type="button" onClick={this.logout}>
                  Logout
                </button>
            ) : (
              <LinkContainer>
                  { location.pathname === "/login" ? (
                    <Link color="white" to="/signup">Sign Up</Link>
                  ) : (
                    <Link color="white" to="/login">Login</Link>
                  )}
              </LinkContainer>
            )}
          </div>
        </div>
        </NavContainer>
    );
  }
}

export default withRouter(Navbar);
