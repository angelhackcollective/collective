/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Input } from '../../styledComponents/Inputs';
import Button from '../../styledComponents/Button';
import { Form, FormWrapper } from './styles';
import axios from "axios";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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
    // username and password validation
    // if (!username) {
    //   alert("Username cannot be blank");
    //   return;
    // }

    // if (password.length < 8) {
    //   alert("Password must be at least 8 characters");
    //   return;
    // }

    // if (password !== passwordConf) {
    //   alert("passwords do not match");
    //   return;
    // }

    // const res = await axios.post("/api/auth/register", { username, password });
    try {
      // eslint-disable-next-line no-undef
      localStorage.setItem("token", username);
      localStorage.setItem("username", username);
      const data = {
        ...this.state
      }
      // this.setState({
      //   username: "",
      //   password: "",
      // });
      this.props.next(data)
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { username, password, passwordConf } = this.state;
    return (
      <FormWrapper>
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="username"
          label="Username"
          placeholder="Username"
          value={username}
          onChange={this.handleChange}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
      </FormWrapper>
    );
  }
}

export default withRouter(CreateAccount);
