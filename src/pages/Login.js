import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pw: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(){

  }
  
  handleChange(e){
    // console.log(e.target)
    this.setState = {

    }
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

        <input type="submit" value="Signin" />
        Don't have an account? <a href='/Signup' onClick={this.handleClick}> Sign up here! </a>
      </form>
      </div>
    );
  }
}

export default Login;