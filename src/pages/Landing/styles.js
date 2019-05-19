import styled from 'styled-components';
import Button from '../../styledComponents/Button';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: unset;
`;

const Hero = styled.div`
  padding-top: 148px;
  margin: 0 auto;
  color: #ffffff;
  text-align: center;
  h1 {
    font-family: Roboto;
    font-size: 29px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    margin-top: 8px;
    font-size: 18px;
  }

  hr {
    border-bottom: solid 2px #ffffff;
    width: 46px;
    margin: 20px auto;
  }
`;

const Btn = styled(Button)`
  border-radius: 23.5px;
  width: 200px;
  max-width: unset;
  height: 50px;
  padding-top: 9px;
  border: none;
  font-size: 17px;
`;


export {
  Wrapper,
  Hero,
  Btn,
};
