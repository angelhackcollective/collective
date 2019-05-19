/* eslint-disable react/forbid-prop-types */
import React, { useState } from "react";
import { Input, Label, Select, TextArea } from '../../styledComponents/Inputs';
import Button from '../../styledComponents/Button';
import { Current, CustomContainer, Form, Header, HeaderWrapper, FormWrapper } from './styles';

const data = [
  {
    title: "Contraceptive Types",
    titleVal: "contraceptiveTypes",
    helper: "Select Type",
    list: [
      {name: "Oral (Pill)", val: "oral"},
      {name: "IUD", val: "iud"},
      {name: "IUS", val: "ius"},
    ],
  },
  {
    title: "Brand",
    helper: "Choose medication brand",
    titleVal: "brand",
    list: [
      {name: "ONE", val: "one"},
      {name: "TWO", val: "two"},
      {name: "THREE", val: "three"},
    ]
  },
  {
    title: "Side Effects",
    titleVal: "sideEffects",
    helper: "Select from the list of side effects",
    list: [
      {name: 'Intermenstrual spotting', val: "spotting"},
      {name: 'Nausea', val: "nausea"},
      {name: 'Breast tenderness', val: "breatTenderness"},
      {name: 'Headaches and migraine', val: "headaches"},
      {name: 'Weight gain', val: "weightGain"},
      {name: 'Mood changes', val: "moodChange"},
      {name: 'Missed periods', val: "missedPeriods"},
      {name: 'Decreased libido', val: "decreasedLibido"},
      {name: 'Vaginal discharge', val: "discharge"},
      {name: 'Changes to eyesight for those using contact lenses', val: "eyesightChange"},
      {name: 'Mental depression', val: "depression"},
      {name: 'Reduced tolerance to carbohydrates (insulin resistance)', val: "carbIntolerance"},
      {name: 'Change in corneal curvature (steepening)', val: "cornealCurve"},
      {name: 'Vaginal candidiasis', val: "candidiasis"},
      {name: 'Abdominal cramps and bloating', val: "crampsAndBloating"},
      {name: 'Edema (water retention)', val: "Edema"},
      {name: 'Melasma (dark pigmentation on the face) which may persist', val: "Melasma"},
    ]
  }
]

const Sel = ({title, titleVal, list, helper, func}) => (
  <div>
    <Label>{title}</Label>
    <Select onChange={func} name={titleVal}>
      <option value={''}>{helper && helper}</option>
      {list.map(({name, val}, i) => (
        <option
          key={i}
          value={val}>
            {name}
        </option>
      ))}
    </Select>
  </div>
);

const SymptomForm = ({toggleModal, open}) => {
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    e.preventDefault();
    const { name, type, checked  } = e.target
    let { value } = e.target
    if (type === 'checkbox') {
      value = checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("SUBMIT DATA", formData)
    toggleModal()
  }

  return (
    <CustomContainer>
    <HeaderWrapper>
        <Header>Contribute your experience and gain collective power</Header>
        <p>Tell us what contraceptive you’re using, your side effects (good and bad)</p>
      </HeaderWrapper>
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        {
          data.map((item, i) => <Sel key={i} {...item} func={handleChange}/>)
        }
        <Input
          type="date"
          name="startDate"
          label="Start Date"
          placeholder="mm/dd/yyyy"
          value={formData.startDate}
          onChange={handleChange}
        />
        <Input
          type="date"
          name="endDate"
          label="End Date"
          placeholder="mm/dd/yyyy"
          value={formData.endDate}
          onChange={handleChange}
        />
        <Current type="checkbox"
          className="checkbox-input"
          name="current"
          label="Currently using this"
          selected={formData.current}
          value={formData.current}
          onChange={handleChange}
        />
        <TextArea
          type="textarea"
          name="experience"
          label="Share your experience"
          value={formData.experience}
          onChange={handleChange}
        />
        <Button type="submit">Close</Button>
      </Form>
    </FormWrapper>
    </CustomContainer>
  );
}

export default SymptomForm;