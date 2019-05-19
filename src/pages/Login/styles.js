import styled from 'styled-components';
import Container from '../../styledComponents/Container';
import { colors } from '../../styledComponents';

const CustomContainer = styled(Container)`
  max-width: 550px;
  padding: 35px 0 75px;
  border: solid 2px ${colors.lineColor};
  background-color: ${colors.white};
`;

const FormWrapper = styled.div`
  max-width: 300px;
  width: 50%;
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

const SubText = styled.div`
  margin-top: 1rem;
  width: 100%;
  text-align: center;

  p {
    font-family: lato;
    font-size: 14px;
    color: ${colors.blue};

    span {
      text-decoration: underline;
    }
  }
`

export {
  CustomContainer,
  FormWrapper,
  CreateAccountHeader,
  Form,
  SubText,
}