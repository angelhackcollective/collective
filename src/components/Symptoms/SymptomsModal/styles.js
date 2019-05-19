import styled from 'styled-components';
import Container from '../../../styledComponents/Container';
import { colors } from '../../../styledComponents';
import { Input } from '../../../styledComponents/Inputs';

const CustomContainer = styled(Container)`
  width: 90%;
  max-width: 500px;
  padding: 52px 0 40px;
  background-color: ${colors.white};
`;

const FormWrapper = styled.div`
  max-width: 300px;
  width: 55%;
  margin: 0 auto;
`;

const CreateAccountHeader = styled.div`
  max-width: 400px;
  margin: 0 auto 30px;
  text-align: center;

  h1 {
    font-size: 20px;
    color: ${colors.red};
    font-family: 'roboto';
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 14px;
    margin-bottom: 0;
    color: ${colors.blue};
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 30px;

  p {
    max-width: 420px;
    margin: 0 auto;
    font-size: 12px;
    text-align: center;
  }
`;

const Header = styled.h2`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
  color: ${colors.red};
`;

const Current = styled(Input)`
&.checkbox-input {
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
}
label {
  margin: 0;
}
  input {
    -webkit-appearance: checkbox;
    width: 14px;
    margin: 0;
    margin-right: 5px;
    height: 14px;
  }
`;

const SuccessWrapper = styled.div`
  padding: 35px 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .iconWrapper {
    .heart-icon {
      height: 45px;
    }

    svg {
      width: 100%;
      path {
        fill: ${colors.logoRed};
        width: 45px;
      }
    }

    margin-bottom: 15px;
  }

`;

export {
  CustomContainer,
  FormWrapper,
  CreateAccountHeader,
  Form,
  HeaderWrapper,
  Header,
  Current,
  SuccessWrapper
}