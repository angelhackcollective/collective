import { css } from 'styled-components';
const sizes = {
  tablet: 768,
  desktop: 1280,
}

const theme = {
  breakpoints: ['768px', '1040px', '1440px'],
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  colors: {
    blue: '#031e46',
    midGrey: '#979797',
    darkGrey: '#333333',
    lightGrey: '#EAEBEB',
    lineColor: '#EAEBEB',
    white: '#ffffff',
    logoRed: '#c72d4d',
    red: '#a91735',
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  fonts: {
    body: '"Lato", sans-serif',
    header: '"Roboto", sans-serif',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  }
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
  theme,
  media,
}