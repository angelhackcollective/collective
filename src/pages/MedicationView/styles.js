import styled from 'styled-components';
import { colors } from '../../styledComponents';
const Card = styled.div`
  width: 100%;
  background-color: ${colors.white};
  border: solid 1px ${colors.lineColor};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .titleRow {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;

    h1 {
      font-family: 'roboto';
      font-weight: bold;
      margin: 0;
      margin-right: 12px;
      color: ${colors.red};
      font-size: 21px;
      text-transform: uppercase;
    }

    p {
      color: ${colors.blue};
      font-size: 14px;
      font-family: 'lato';
      margin: 0;
    }
  }

  .filterRow {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 25px;

    .filterPair {
      display: flex;
      margin-right: 25px;

      p {
        margin: 0;
      }

      .type {

        margin-right: 10px;
        text-transform: uppercase;
        color: ${colors.midGrey};
      }

      .name {
        color: ${colors.blue};
      }
    }
  }
`;

export {
  Card,
}
