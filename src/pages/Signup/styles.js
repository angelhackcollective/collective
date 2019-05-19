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
  FormWrapper,
  Form,
  HeaderWrapper,
  Header,
  Pill,
  PillWrapper,
}