import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding-top: 145px;
  width: 100%;
  height: 100%;
  background-image: url('${props => props.src}');
`;

export {
  Wrapper,
};
