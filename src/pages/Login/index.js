import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../styledComponents/Button';
import { Input } from '../../styledComponents/Inputs';
import { CustomContainer, Form, FormWrapper, CreateAccountHeader, SubText } from './styles';
import axios from 'axios';
// import Heart from '../components/Icons/Heart';

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
      <CustomContainer>
        <CreateAccountHeader>
        <h1>Browse and contribute to the community</h1>
        <p>Report your symptoms or look for new birth control solutions</p>
      </CreateAccountHeader>
      <FormWrapper>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="username"
            value={username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
          />
          <Button type="submit">Sign In</Button>
          <SubText>
            <p>Don't have an account? <span onClick={() => this.props.history.push("/signup")}>Sign Up</span> </p>
          </SubText>
        </Form>
        </FormWrapper>
      </CustomContainer>
    );
  }
}

export default withRouter(Login);
