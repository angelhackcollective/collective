import styled from 'styled-components';
import { colors } from './index';

const Header = styled.div`
  width: 1024px;
  height: 60px;
  background: ${colors.blue};
`;

const HeadWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center

  h1 {
    font-weight: bold;
    font-size: 18px;
    margin: 0;
  }

  a {
    color: black;
    
  }
`;
export { Header, HeadWrapper };