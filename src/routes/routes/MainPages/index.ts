import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

export const Discover = loadable(() => pMinDelay(import('./Discover'), 3000));
export const Popular = loadable(() => pMinDelay(import('./Popular'), 3000));
export const TopRated = loadable(() => pMinDelay(import('./TopRated'), 3000));
export const SearchResults = loadable(() =>
  pMinDelay(import('./SearchResults'), 3000),
);
