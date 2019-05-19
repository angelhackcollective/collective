import styled from 'styled-components';
import { colors } from '../../../styledComponents';

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
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
