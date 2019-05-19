import styled from 'styled-components';
import { colors } from '../../styledComponents';

const HeadWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;

  h1 {
    font-weight: bold;
    font-size: 18px;
    margin: 0;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  background-color: ${colors.lineColor};
  margin-bottom: 1rem;
`;

const Filters = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'lato';
    font-weight: bold;
    font-size: 14px;
    color: ${colors.blue};
    letter-spacing: 0;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;

const FilterBtnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const BtnWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;


const SubFilter = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;

  .pillContainer {
    display: flex;
    flex-direction: row;
  }

  .sortContainer {
    display: flex;
    align-items: center;

    p {
      margin-right: 10px;
    }
  }
`;

export {
  HeadWrapper,
  FilterContainer,
  Filters,
  FilterWrapper,
  FilterBtnWrapper,
  BtnWrapper,
  SubFilter,
}