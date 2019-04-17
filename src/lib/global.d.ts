
/**
 * RootStore
 */

declare interface IRootState {
    movies?: any,
    orders?: any;
    user?: any;
    router?: any;
}

declare interface IUserState {
  isAuthenticated: boolean,
  user: Object | null,
  error: boolean,
}

declare interface IMoviesState {
  movies: any | {
    page: number,
    total_results: number,
    total_pages: number
    results: any[],
  },
  // movies: any,
  favorites: any[],
  watchLater: [] | null,
  loading: boolean,
  error: boolean,
}

declare interface IFilterState {
  rating: {
    min: number,
    max:number
  },
  runtime: {
    min:number,
    max: number
  },
  sort_by: {
    value: string,
    label: string
  },
  order: {
    value: string,
    label: string,
  },
  year: number
}

/**
 * orders information
 */
declare interface IOrdersState {
  orders: any,
  errorMessage: string | null,
  loading: boolean;
}

declare interface OrderInterface {
  avg: string;
  buy_price: string;
  high: string;
  last_trade: string;
  low: string;
  sell_price: string;
  updated: number;
  vol: string;
  vol_curr: string;
}

declare type OrderBookInfo = string[];

declare interface OrderInfo {
  ask_quantity: string;
  ask_amount: string;
  ask_top: string;
  bid_quantity: string;
  bid_amount: string;
  bid_top: string;
  ask: OrderBookInfo[];
  bid: OrderBookInfo[];
}

