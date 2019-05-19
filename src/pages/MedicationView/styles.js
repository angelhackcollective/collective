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

  .section-title {
    margin-bottom: 8px;
    margin-top: 0;
    text-transform: uppercase;
    font-size: 14px;
    font-family: 'lato';
    color: ${colors.midGrey};
  }

  .summaryRow {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 160px;

    .your-summary {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    .graph {
      width: 20%;
    }
  }
`;

const Percent = styled.div`
  width: 100%;
  p {
    margin-bottom: 2px;
    margin-top: 15px;
    font-size; 14px;
    color: ${colors.blue};
  }

  .line {
    width: 100%;
    height: 12px;
    display: flex;
    justify-content: flex-start;
    border: solid 1px #f3f3f3;
    background-color: #fafafa;

    .bg {
      width: ${props => props.percent};
      height: 100%;
      background-color: #e5f2ff;
      display: inline;
      margin: 0;
    }
  }
`;

const SideEffects = styled.div`
  width: 100%;

  .sideEffects {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    p {
      margin: 0;
      font-size: 14px;
      line-height: 16px;
    }
  }
`;

const Experiences = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column

  .header {
    border-bottom: solid 2px #f3f3f3;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .sortContainer {
      display: flex;
      align-items: center;

      p {
        margin-right: 10px;
      }
    }
  }
`;



export {
  Card,
  Percent,
  SideEffects,
  Experiences,
}
