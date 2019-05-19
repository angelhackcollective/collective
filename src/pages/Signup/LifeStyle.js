/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import { Input, Select, Label } from '../../styledComponents/Inputs';
import Button from '../../styledComponents/Button';
import { Form, Header, HeaderWrapper, FormWrapper } from './styles';

const options = [
  {
    name: "YES",
    value: true,
  },
  {
    name: "NO",
    value: false,
  }
]

const questions = [
  {q: "Do you smoke?", val: "smoke"},
  {q: "Are you sexually active?", val: "sexuallyActive"},
  {q: "Do you do recreational drugs?", val: "drugs"},
  {q: "Do you consume alcohol?", val: "alcohol"},
]

class LifeStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smoker: false,
      sexuallyActive: false,
      drugs: false,
      alcohol: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, question) {
    e.preventDefault();
    console.log(question)
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
    const { smoker, sexuallyActive, drugs, alcohol } = this.state;
    return (
      <FormWrapper>
        <HeaderWrapper>
          <Header>Lifestyle</Header>
          <p>Please tell us more about your personal life so we can better recommend medications</p>
        </HeaderWrapper>
        <Form onSubmit={this.handleSubmit}>
          {
            questions.map(({q, val}, i) => (
              <div key={i}>
            <Label>{q}</Label>
            <Select onChange={(e) => this.handleChange(e, val)}>
              <option value={''}></option>
              {options.map(({name, value}, i) => (
                <option
                  key={i}
                  value={value}>
                    {name}
                </option>
              ))}
            </Select>
          </div>
            ))
          }
          <Button type="submit">Submit</Button>
        </Form>
      </FormWrapper>
    );
  }
}

export default LifeStyle;
