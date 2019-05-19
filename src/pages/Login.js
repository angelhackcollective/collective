import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../styledComponents/Button';
import { TextInput } from '../styledComponents/Inputs';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
    const { username, password } = this.state;
    const { history } = this.props;

    if (!username) {
      alert("Please include a username to login");
    }

    if (!password) {
      alert("Please include a password to submit");
    }

    // const res = await axios.put("/api/auth/login", { username, password });

    try {
      // eslint-disable-next-line no-undef
      localStorage.setItem("token", username);
      localStorage.setItem("username", username);

      this.setState({
        username: "",
        password: ""
      });

      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          label="Username"
          onChange={this.handleChange}
        />
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
<<<<<<< HEAD
        <button type="submit">Login</button>
        Don't have an account? <a href="/Signup" >Sign up</a> here
=======

        <Button type="submit">Login</Button>
>>>>>>> ef48a75a41f503e858911f5263df53774579f041
      </form>
    );
  }
}

export default withRouter(Login);
