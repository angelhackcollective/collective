import { css } from 'styled-components';

const sizes = {
  tablet: 768,
  desktop: 1280,
}

const colors = {
  blue: '#031e46',
  midGrey: '#979797',
  darkGrey: '#333333',
  lightGrey: '#EAEBEB',
  lineColor: '#EAEBEB',
  white: '#ffffff',
  background: '#fafafafa',
  logoRed: '#c72d4d',
  red: '#a91735',
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export {
  colors,
  media,
}