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

const HeaderWrapper = styled.div`
  margin-bottom: 30px;
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

const PillWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const Pill = styled.p`
  display: inline-block;
  font-size: 75%;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 10rem;
  color: #fff;
  background-color: #6c757d;
  padding: 10px 12px;
  margin: .5rem;
`;

export {
  CustomContainer,
  FormWrapper,
  CreateAccountHeader,
  Form,
  HeaderWrapper,
  Header,
  Pill,
  PillWrapper,
}