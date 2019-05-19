import React, { Fragment } from 'react';
import CreateAccount from './CreateAccount';
import LifeStyle from './LifeStyle';
import MedicalHistory from './MedicalHistory';
import PersonalDetails from './PersonalDetails';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CustomContainer } from './styles';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

const components = [
  CreateAccount,
  PersonalDetails,
  MedicalHistory,
  LifeStyle,
]

function getSteps() {
  return [
    "Create Account",
    "Personal Details",
    "Medical History",
    "Lifestyle"
  ]
}

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 3,
      patientData: {},
      api: "https://hackathon-the-collective.herokuapp.com/api/v1/signup"
    };
    this.handleNext = this.handleNext.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  handleNext(data) {
    const { activeStep } = this.state;
    if (activeStep === 3) {
      this.setState((state) => ({
        patientData: {...state.patientData, ...data}
      }))
      this.signUp()
    } else {
      this.setState((state) => ({
        patientData: {...state.patientData, ...data},
        activeStep: state.activeStep + 1,
      }))
      return
    }
  }

  async signUp() {
    const { url, patientData } = this.state
    const res = await axios.post(url, patientData).catch(err => {
      console.log("ERROR")
      console.log(err)
    })
    console.log(res)
    localStorage.setItem("token", patientData.username);
    localStorage.setItem("username", patientData.username);
    this.props.history.push("/")
  }

  render() {
    const { activeStep } = this.state
    const ComponentStep = components[activeStep]
    const steps = getSteps()
    const { classes } = this.props
    return (
      <CustomContainer>
        { activeStep >= 1 && (
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const props = {};
              const labelProps = {};
              return (
                <Step key={label} {...props}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        )}
        <Fragment>
          { React.createElement(ComponentStep, {next: this.handleNext}, null) }
        </Fragment>
      </CustomContainer>
    )
  }
};

export default withStyles(styles)(withRouter(Signup));