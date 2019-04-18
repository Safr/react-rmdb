import { css, ThemedCssFunction } from 'styled-components';

const sizes = {
  desktop: 1440,
  laptop: 1130,
  tablet: 1023,
  phone: 768,
  smallPhone: 480,
};

export const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css.call(undefined, ...args)};
    }
  `;
  return acc;
}, {} as { [key in keyof typeof sizes]: ThemedCssFunction<any> },
);
