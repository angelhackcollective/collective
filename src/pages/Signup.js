import React, { Component } from 'react';
import { MyBox } from '../styles';

class Signup extends Component {
  constructor(props){ 
    super(props);
    this.state = {
      username: '',
      pw: ''
    }
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(){
    console.log("submit handled");
  }
  
  handleCheck(e){
    e.preventDefault()
    if (e.target.value !== this.state.pw) {
      console.log("passwords do not match");
    } else {
      this.handleSubmit();
    }
  }
  render() {
    return (
      <div>
        Signup
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        
        <label>
          Re-enter Password:
          <input type="text" value={this.state.value} onChange={this.handleChage} />
        </label>


        <input type="submit" value="Create Account" handleCheck={this.handleCheck}/>
        Have an account? <a href='/Login' onClick={this.handleClick}> Login here </a>
      </form>
      </div>
    );
  }
}

export default Signup;