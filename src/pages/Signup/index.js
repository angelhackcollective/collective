import React, { Fragment } from 'react';
import CreateAccount from './CreateAccount';
import LifeStyle from './LifeStyle';
import MedicalHistory from './MedicalHistory';
import PersonalDetails from './PersonalDetails';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { CustomContainer } from './styles';
import { withRouter } from 'react-router-dom';
import Section from '../../styledComponents/Section';

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
      url: "https://hackathon-the-collective.herokuapp.com/api/v1/user"
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
    const { patientData } = this.state
    // const res = await axios.post(url, patientData).catch(err => {
    //   console.log("ERROR")
    //   console.log(err)
    // })
    localStorage.setItem("token", patientData.username);
    localStorage.setItem("username", patientData.username);
    this.props.history.push("/browse")
  }

  render() {
    const { activeStep } = this.state
    const ComponentStep = components[activeStep]
    const steps = getSteps()
    return (
      <Section style={{background: "transparent"}}>
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
      </Section>
    )
  }
};

export default withStyles(styles)(withRouter(Signup));