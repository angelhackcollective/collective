import styled from 'styled-components';
import { colors } from './index';

const defaultButtonStyle = color => `
  display: inline-block;
  font-size: 0.875rem;
  font-weight: bold;
  font-family: 'lato';
  color: ${colors.white};
  background-color: ${color ? colors[color] : colors.blue};
  border-radius: 2px;
  cursor: pointer;
  transition: background-color .3s ease, color .3s ease;
  padding-top: 12px;
  padding-bottom: 11px;
  padding-right: 28px;
  padding-left: 28px;
  max-width: 270px;

  :disabled, &.disabled {
    background-color: #d6d5d4;
    cursor: default;
  }

  :hover {
    background-color: ${colors.midGrey};
    color: ${colors.white};
    transition: background-color .3s ease 0s, color .3s ease 0s;
  }
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  ${props => defaultButtonStyle(props.color)}
`;

const OutlinedButton = styled(Button)`
  background-color: transparent;
  color: ${colors.midGrey};
  min-width: 120px;
  height: 30px;
  box-shadow: 0px 0px 0px 1px ${colors.midGrey};
  transition: box-shadow 0.3s ease 0s;
  border: none;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-right: 15px;
  padding-left: 15px;
`;

export { OutlinedButton };
export default Button;
