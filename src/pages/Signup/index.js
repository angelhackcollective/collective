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
import Section from '../../styledComponents/Section';
import { CustomContainer } from './styles';
import styled from 'styled-components';

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
      activeStep: 0,
      patientData: {},
    };
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext(data) {
    const { activeStep } = this.state;
    console.log(data)
    this.setState((state) => ({
      patientData: {...state.patientData, ...data},
      activeStep: state.activeStep + 1,
    }))
  }

  render() {
    const { activeStep } = this.state
    const ComponentStep = components[activeStep]
    const steps = getSteps()
    const { classes } = this.props
    return (
        <Section dark>
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
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed - you&apos;re finished
                  </Typography>
                </div>
              ) : React.createElement(ComponentStep, {next: this.handleNext}, null)
              }
            </div>
          </CustomContainer>
      </Section>
    )
  }
};

export default withStyles(styles)(Signup);