import { request } from 'lib/helpers';

export default {
  getOrders: () => request('get', '/ticker/'),
  getOrderBook: pair => request('get', `/order_book/?limit=50&pair=${pair}`),
};
