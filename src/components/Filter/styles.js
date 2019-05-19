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
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  background-color: ${colors.lineColor}
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
`;

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;

  input {
    margin: 0;
    margin-right: 1rem;
  }

  label {
    font-size: 14px;
    letter-spacing: 0;
  }
`;

const BtnWrapper = styled.div`
  width: 15%;
`;

export {
  HeadWrapper,
  FilterContainer,
  Filters,
  FilterWrapper,
  FilterBtnWrapper,
  BtnWrapper,
  CheckWrapper,
}