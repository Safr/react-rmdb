import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

export const ComingSoon = loadable(() =>
  pMinDelay(import('./ComingSoon'), 3000),
);
export const Discover = loadable(() => pMinDelay(import('./Discover'), 1000));
export const Movie = loadable(() => pMinDelay(import('./Movie'), 1000));
export const Popular = loadable(() => pMinDelay(import('./Popular'), 1000));
export const TopRated = loadable(() => pMinDelay(import('./TopRated'), 1000));
export const SearchResults = loadable(() =>
  pMinDelay(import('./SearchResults'), 1000),
);
