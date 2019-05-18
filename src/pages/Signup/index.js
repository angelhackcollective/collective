import React from 'react';
import CreateAccount from './CreateAccount';
import LifeStyle from './LifeStyle';
import MedicalHistory from './MedicalHistory';
import PersonalDetails from './PersonalDetails';

const signupFlow = {
  "createAccount": CreateAccount,
  "lifeStyle": LifeStyle,
  "medicalHistory": MedicalHistory,
  "personalDetails": PersonalDetails,
}

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signupStep: "create-account"
    };
  }

  progressStep(step) {
    this.setState({
      signupStep: step
    })
  }

  render() {
    return (
      <Fragment>
        
      </Fragment>
    )
  }
};

export default Signup;