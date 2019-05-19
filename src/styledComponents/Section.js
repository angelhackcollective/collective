import styled from 'styled-components';
import { media, colors } from './index';

const Section = styled.div`
  margin: 0 auto;
  background: ${props => (props.dark ? colors.lightGrey : colors.white)};
  max-width: ${props => (props.inner ? '768px' : undefined)};
  padding-top: ${props => (props.noPadTop || props.noPad ? '0' : '40px')};
  padding-bottom: ${props => (props.noPadBottom || props.noPad ? '0' : '40px')};
  ${media.tablet`
    padding-top: ${props => (props.noPadTop || props.noPad ? '0' : '60px')};
    padding-bottom: ${props => props.noPadBottom || props.noPad ? '0' : '60px'};
  `}
  ${media.desktop`
    max-width: unset;
    padding-top: ${props => (props.noPadTop || props.noPad ? '0' : '80px')};
    padding-bottom: ${props => props.noPadBottom || props.noPad ? '0' : '80px'};
  `}
`;

const SplitBackgroundSection = styled(Section)`
  @media(max-width: 767px) {
    padding-top: 0;
    padding-bottom: 0;
  }
  background: linear-gradient(
    to bottom,
    ${props => colors[props.top]} 0%,
    ${props => colors[props.top]} ${props => props.breakPoint ? props.breakPoint : '60%'},
    ${props => colors[props.bottom]} ${props => props.breakPoint ? props.breakPoint : '60%'},
    ${props => colors[props.bottom]} 100%
  );
`;

export { SplitBackgroundSection };
export default Section;
