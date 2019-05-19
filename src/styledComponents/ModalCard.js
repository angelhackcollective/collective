/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import { colors } from '../index';
import { Link } from 'react-router-dom';

const defaultStyles = () => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  margin-bottom: 1.5em;
  border-radius: 2px;
  margin: .5em;
  text-decoration: none;
  width: 100%;
`;


const Card = styled.div`
  ${props => defaultStyles(props)}
  background-color: ${colors.white}};
  height: ${props => props.height ? props.height : 'fit-content'};
  color: ${colors.blue};
  width: ${props => props.width ? props.width : 'auto'};
`;

const LinkCard = styled(Link)`
  ${props => defaultStyles(props)}
  height: 20em;
  max-width: 480px;
  margin: 0 auto;
  background-color: #ffffff;
`;

export default ModalCard;
export { LinkCard };

