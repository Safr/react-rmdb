import { css } from 'styled-components/macro';

const sizes = {
  desktop: 1440,
  laptop: 1130,
  tablet: 1023,
  phone: 768,
  smallPhone: 375,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css.call(undefined, ...args)};
    }
  `;
  return acc;
}, {});
