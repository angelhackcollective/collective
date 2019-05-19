/* eslint-disable react/forbid-prop-types */
import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Input } from '../../styledComponents/Inputs';
import Button from '../../styledComponents/Button';
import { Form, FormWrapper, CreateAccountHeader, SubText } from './styles';

class CreateAccount extends Component {
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
    const { username } = this.state;
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
      <Fragment>
      <CreateAccountHeader>
        <h1>Find the right birth control solution for <em>you</em></h1>
        <p>Reported symptoms are from women— just like you.</p>
      </CreateAccountHeader>
      <FormWrapper>
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="username"
          label="Username"
          value={username}
          onChange={this.handleChange}
        />
        <Input
          type="password"
          name="password"
          label="Create Password"
          value={password}
          onChange={this.handleChange}
        />
        <Input
          type="password"
          name="passwordConf"
          label="Re-Enter Password"
          value={passwordConf}
          onChange={this.handleChange}
        />
        <Button type="submit">Create Account</Button>
        <SubText>
            <p>Already have an account? <span onClick={() => this.props.history.push("/login")}>Log In</span> </p>
          </SubText>
      </Form>
      </FormWrapper>
      </Fragment>
    );
  }
}

export default withRouter(CreateAccount);
