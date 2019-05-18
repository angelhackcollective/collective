/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordConf: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password, passwordConf } = this.state;
    const { history } = this.props;
    // username and password validation
    if (!username) {
      alert("Username cannot be blank");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    if (password !== passwordConf) {
      alert("passwords do not match");
      return;
    }

    // const res = await axios.post("/api/auth/register", { username, password });
    try {
      // eslint-disable-next-line no-undef
      localStorage.setItem("token", username);
      localStorage.setItem("username", username);

      this.setState({
        username: "",
        password: "",
        passwordConf: "",
      });

      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { username, password, passwordConf } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        />
        <input
          type="passwordConf"
          name="passwordConf"
          placeholder="Confirm Password"
          value={passwordConf}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default withRouter(Signup);
