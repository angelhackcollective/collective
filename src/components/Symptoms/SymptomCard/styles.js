import styled from 'styled-components';
import { colors } from '../../../styledComponents';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  min-height: 50px;
  display: flex;

  .logoContainer {
    width: 20px;
    margin-right: 10px;
    display: flex;
    align-items: flex-start;

    .logo {
      margin-top: 0;
      background: ${props => props.color ? `${props.color}` : colors.midGrey};
      border-radius: 50%;
      width: 100%;
      text-align: center;
      vertical-align: middle;
      color: white;
      font-weight: bold;
      text-transform: capitalize;
      padding-top: 1px;
    }
  }

  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-right: 10px;

    p {
      font-size: 14px;
      font-family: 'lato';
      color: ${colors.blue};
      margin: 0;
      margin-bottom: 12px;
      text-align: left;
    }

    .dates {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;

      p {
        margin: 0;
        color: ${colors.midGrey};
      }
    }

    .details {
      flex: 1;
      p {
        margin: 0;
        font-size; 14px;
        color: ${colors.blue};
      }
    }
  }
`;

export {
  Wrapper,

}