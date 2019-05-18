import styled from 'styled-components';
import { theme, media } from './index';

const defaultButtonStyle = inverted => `
  border: none;
  display: inline-block;
  width: 270px;
  font-size: 0.875rem;
  font-weight: bold;
  font-family: 'lato';
  color: ${inverted ? theme.colors.blue : theme.colors.white};
  background-color: ${inverted ? theme.colors.white : theme.colors.blue};
  box-shadow: 0px 0px 0px 1px ${inverted ? theme.colors.white : theme.colors.blue};
  border-radius: 2px;
  cursor: pointer;
  transition: background-color .5s ease, color .5s ease, box-shadow 0.3s ease 0s, border-color .3s ease 0s;;
  padding-top: 12px;
  padding-bottom: 11px;
  padding-right: 28px;
  padding-left: 28px;

  :disabled, &.disabled {
    background-color: #d6d5d4;
    cursor: default;
  }

  :hover {
    background-color: ${inverted ? theme.colors.blue : theme.colors.white};
    color: ${inverted ? theme.colors.white : theme.colors.blue};
    box-shadow: 0px 0px 0px 2px ${inverted ? theme.colors.white : theme.colors.blue};
    border-color: ${inverted ? theme.colors.white : theme.colors.blue};
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
  color: ${theme.colors.blue};
  min-width: 270px;
  box-shadow: 0px 0px 0px 1px ${theme.colors.blue};
  transition: box-shadow 0.3s ease 0s, border-color .3s ease 0s;
  :hover {
    background: transparent;
    color: ${theme.colors.white};
    box-shadow: 0px 0px 0px 3px ${theme.colors.blue};
    border-color: ${theme.colors.blue};
    transition: box-shadow 0.3s ease 0s, border-color .3s ease 0s;
  }
`;

export { OutlinedButton };
export default Button;
