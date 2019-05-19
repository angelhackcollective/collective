/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import { Input, Label } from '../../styledComponents/Inputs';
import Button from '../../styledComponents/Button';
import { Form, Header, HeaderWrapper, FormWrapper, Pill, PillWrapper } from './styles';
import SelectSearch from 'react-select-search'
import './select.css';

const conditionOptions = [
      {type: "conditions", name: 'Headaches', value: 'headaches'},
      {type: "conditions", name: 'Runny nose', value: 'nose'},
      {type: "conditions", name: 'Snorzzzz', value: 'snorz'},
    ]
const medicationOptions = [
  {type: "medications", name: 'Asprin', value: 'asprin'},
  {type: "medications", name: 'Nyquil', value: 'nyquil'},
  {type: "medications", name: 'Snorzzzz', value: 'snorz'},
]

class MedicalHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conditions: [],
      medications: [],
      births: 0,
      miscarriages: 0,
      abortions: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleSelect(e) {
    const { conditions, medications } = this.state;
    if (e.type === "conditions") {
      this.setState({
        conditions: [e, ...conditions]
      })
    } else {
      this.setState({
        medications: [e, ...medications]
      })
    }
  }

  handleSelectMedications(e) {
    this.state.conditions.push(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      ...this.state
    }
    this.props.next(data)
  }

  render() {
    const { conditions, medications, births, miscarriages, abortions } = this.state;
    console.log(this.state)
    return (
      <FormWrapper>
        <HeaderWrapper>
          <Header>Provide your medical history</Header>
          <p>Colletive securely stores this information. This will not be visible to any other users.</p>
        </HeaderWrapper>
      <Form onSubmit={this.handleSubmit}>
        <div>
          <Label>List any current health issues</Label>
          <SelectSearch
            onChange={this.handleSelect}
            options={conditionOptions}
            value=""
            name="conditions"
            placeholder="Type to search for health issues"
          />
          <PillWrapper>
            {
              conditions.map(({name}) => (
                <Pill key={name}>{name}</Pill>
              ))
            }
          </PillWrapper>
        </div>
        <div>
          <Label>List your current medications</Label>
          <SelectSearch onChange={this.handleSelect} options={medicationOptions} value="" name="medications" placeholder="Type to search for medications" />
          <PillWrapper>
            {
              medications.map(({name}) => (
                <Pill key={name}>{name}</Pill>
              ))
            }
          </PillWrapper>
        </div>
        <Input
          type="number"
          name="births"
          label="Number of biological children"
          value={births}
          onChange={this.handleChange}
        />
        <Input
          type="number"
          name="miscarriages"
          label="Number of miscarriages"
          value={miscarriages}
          onChange={this.handleChange}
        />
        <Input
          type="number"
          name="abortions"
          label="Number of abortions"
          value={abortions}
          onChange={this.handleChange}
        />
        <Button type="submit">Save and Continue</Button>
      </Form>
      </FormWrapper>
    );
  }
}

export default MedicalHistory;