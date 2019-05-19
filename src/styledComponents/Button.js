import styled from 'styled-components';
import { colors, media } from './index';

const defaultButtonStyle = inverted => `
  display: inline-block;
  font-size: 0.875rem;
  font-weight: bold;
  font-family: 'lato';
  color: ${inverted ? colors.blue : colors.white};
  background-color: ${inverted ? colors.white : colors.blue};
  border-radius: 2px;
  cursor: pointer;
  transition: background-color .5s ease, color .5s ease, box-shadow 0.3s ease 0s, border-color .3s ease 0s;;
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
    background-color: ${inverted ? colors.blue : colors.white};
    color: ${inverted ? colors.white : colors.blue};
    box-shadow: 0px 0px 0px 2px ${inverted ? colors.white : colors.blue};
    border-color: ${inverted ? colors.white : colors.blue};
    transition: background-color .5s ease 0s, color .5s ease 0s, box-shadow 0.3s ease 0s, border-color .3s ease 0s;

  }
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  ${props => defaultButtonStyle(props.inverted)}
`;

const OutlinedButton = styled(Button)`
  background-color: transparent;
  color: ${colors.blue};
  min-width: 270px;
  box-shadow: 0px 0px 0px 1px ${colors.blue};
  transition: box-shadow 0.3s ease 0s, border-color .3s ease 0s;
  :hover {
    background: transparent;
    color: ${colors.white};
    box-shadow: 0px 0px 0px 3px ${colors.blue};
    border-color: ${colors.blue};
    transition: box-shadow 0.3s ease 0s, border-color .3s ease 0s;
  }
`;

export { OutlinedButton };
export default Button;