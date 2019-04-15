import { createWhitelistFilter } from 'redux-persist-transform-filter';

// export default [createWhitelistFilter('orders', ['orders'])];
export default [createWhitelistFilter('')];

// export const blacklist = ['modals'];

// export const whitelist = ['navigation'];

export const blacklist = ['auth'];

export const whitelist = ['navigation'];
