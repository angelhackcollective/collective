import styled from 'styled-components';
import { colors } from './index';
import { NavLink } from 'react-router-dom';

const NavContainer = styled.div`
  height: 60px;
  background: ${colors.blue};
  width: 100%;
  display: flex;
  align-items: center;

  .navWrapper {
    margin: 0 auto;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      margin: 0;
      margin-left: 20px;
      color: ${colors.red};
      font-size: 24px
      a {
        color: ${colors.white};
      }
    }
    span{
      font-size:20px
      color:${colors.white};
    }

  }
`;

const Link = styled(NavLink)`
  color: white;
  font-family: Roboto;
  font-size: 14px;
  text-decoration: none;

`;

const LinkContainer = styled.div`
  margin-right: 20px;
`;


export { NavContainer, Link, LinkContainer };