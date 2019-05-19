import styled from 'styled-components';

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 14px;

  input {
    margin: 0;
    margin-right: 5px;
  }

  label {
    font-size: 14px;
    letter-spacing: 0;
  }
`;

const Indent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .subOpts {
    padding-left: 5px;
    position: absolute;
    white-space: nowrap;
    top: 27px;
    left: 13px;
    border-left: solid 1px black;
  }

  .spacer {
    height: 60px;
    width: 1px;
    background: transparent;
    border: none;
  }
`;

export {
  CheckWrapper,
  Indent,
}