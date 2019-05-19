import styled from 'styled-components';
import { colors } from '../../styledComponents';

const FormWrapper = styled.div`
  max-width: 300px;
  width: 50%;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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

export {
  FormWrapper,
  Form,
  Header,
}