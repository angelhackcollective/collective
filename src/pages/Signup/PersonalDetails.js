/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import { Input } from '../../styledComponents/Inputs';
import Button from '../../styledComponents/Button';

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: "",
      ethnicity: "",
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
    this.props.next()
  }

  render() {
    const { dob } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="date"
          name="dob"
          label="Date of Birth"
          placeholder="mm/dd/yyyy"
          value={dob}
          onChange={this.handleChange}
        />

        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default PersonalDetails;