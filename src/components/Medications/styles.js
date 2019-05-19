import styled from 'styled-components';
import {colors } from '../../styledComponents';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px 16px;

  .headerRow {
    display: flex;
    justify-content: space-between;
    margin: 0;
    margin-bottom: 10px;

    .subRow {
      display: flex;
      align-items: center;

      h4 {
        color: ${colors.red};
        text-transform: uppercase;
        font-weight: bold;
        font-size: 14px;
        font-family: 'roboto';
        margin: 0;
        margin-right: 12px;
      }

      p {
        font-family: 'lato';
        color: ${colors.blue};
        font-size: 12px;
      }
    }
  }
`;

const SummaryRow = styled.div`
.section-title {
  margin-bottom: 8px;
  margin-top: 0;
  text-transform: uppercase;
  font-size: 14px;
  font-family: 'lato';
  color: ${colors.midGrey};
}

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

export {
  Wrapper,
  SummaryRow,
  Percent,
}