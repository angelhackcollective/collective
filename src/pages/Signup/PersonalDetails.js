/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import { Input, Select } from '../../styledComponents/Inputs';
import Button from '../../styledComponents/Button';
import { Form, Header, FormWrapper } from './styles';
const options = [
  "White",
  "Asian",
]

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
    const data = {
      ...this.state
    }
    this.props.next(data)
  }

  render() {
    const { dob } = this.state;
    return (
      <FormWrapper>
      <Header>Personal Details</Header>
      <p>Tell us about yourself so we can provide you insight from those that might be similar to you.</p>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="date"
            name="dob"
            label="Date of Birth"
            placeholder="mm/dd/yyyy"
            value={dob}
            onChange={this.handleChange}
          />
          <Select onChange={this.handleChange}>
            <option value={''}>Ethnicity</option>
            {options.map((ethnicity, i) => (
              <option
                key={i}
                value={ethnicity}>
                  {ethnicity}
              </option>
            ))}
          </Select>
          <Button type="submit">Submit</Button>
        </Form>
      </FormWrapper>
    );
  }
}

export default PersonalDetails;