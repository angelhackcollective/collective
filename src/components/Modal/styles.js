import styled from 'styled-components';
import { colors } from '../../styledComponents';

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  padding: 50px 38px 40px;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(208, 208, 208, 0.5);
  background-color: ${colors.white};

  .close {
    position: absolute;
    top: 20px;
    right: 20px;

    path {
      stroke: ${colors.white};
      stroke-width: 34px;
      fill: ${colors.blue};
    }
  }
`;

export {
  Wrapper,
};
