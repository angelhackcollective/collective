import React from 'react';
import styled from 'styled-components';
import { PillWrapper as Wrapper } from './Pill';
import { colors } from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const defaultStyles = (color) => `
  display: flex;
  color: ${colors.logoRed};

  p {
    color: ${colors.logoRed};
    margin: 0;
    font-weight: bold;
  }

  svg {
    path {
      fill: ${colors.logoRed};
    }
  }
`;

const SmallWrapper = styled(Wrapper)`
  ${() => defaultStyles()}
  width: 150px;
  p {
    font-size: 12px;
  }
`;

const LargeWrapper = styled(Wrapper)`
  ${props => defaultStyles(props.color)}
  width: 186px;

`

const SimilarSmall = () => (
  <SmallWrapper color="lightPink">
    <FontAwesomeIcon icon="heart" />
    <p>Similar women like this</p>
  </SmallWrapper>
);

const SimilarLarge = () => (
  <LargeWrapper color="lightPink">
    <FontAwesomeIcon icon="heart" />
    <p>Similar women like this</p>
  </LargeWrapper>
)

export {
  SimilarSmall,
  SimilarLarge,
};