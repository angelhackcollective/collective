import styled from 'styled-components';
import { media } from './index';

const Container = styled.div`
  margin: 0 auto;
  width: 90%;

  ${media.tablet`
    width: 990px;
  `}

  ${media.desktop`
    width: 1180px;
  `}
`;

export default Container;