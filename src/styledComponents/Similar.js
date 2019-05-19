import React from 'react';
import styled from 'styled-components';
import { PillWrapper as Wrapper } from './Pill';
import { colors } from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SmallWrapper = styled(Wrapper)`
  width: 150px;
  display: flex;
  color: ${colors.logoRed};

  p {
    color: ${colors.logoRed};
    margin: 0;
    font-size: 12px;
    font-weight: bold;
  }

  svg {
    path {
      fill: ${colors.logoRed};
    }
  }
`;

const SimilarSmall = () => (
  <SmallWrapper color="lightPink">
    <FontAwesomeIcon icon="heart" />
    <p>Similar women like this</p>
  </SmallWrapper>
);

const SimilarLarge = () => (
  <SmallWrapper color="lightPink">
    <FontAwesomeIcon icon="heart" />
    <p>Similar women like this</p>
  </SmallWrapper>
)

export {
  SimilarSmall,
};