import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

export const Dashboard = loadable(() =>
  pMinDelay(import('./Dashboard'), 3000),
);
export const SearchResults = loadable(() =>
  pMinDelay(import('./SearchResults'), 3000),
);
