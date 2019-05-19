import { css } from 'styled-components';

const sizes = {
  tablet: 768,
  desktop: 1440,
}

const colors = {
  blue: '#031e46',
  midGrey: '#979797',
  darkGrey: '#333333',
  lightGrey: '#fafafafa',
  lineColor: '#EAEBEB',
  white: '#ffffff',
  background: '#fafafafa',
  logoRed: '#c72d4d',
  red: '#a91735',
  lightPink: '#fff8fb',
  lightBlue: '#e5f2ff',
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