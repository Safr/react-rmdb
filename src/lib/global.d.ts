declare module 'react-toastify' {
  const content: any 
  export const ToastContainer: any
  export const toast: any
  export default content
}

/**
 * RootStore
 */
declare interface IRootState {
    movies?: any,
    orders?: any;
    user?: any;
    favorites?: any;
    filters?: any;
    router?: any;
}

declare interface IAuthState {
  isAuthenticated: boolean;
  user: Object | null;
  error: boolean;
}

declare interface IFavoritesState {
  favoritedMovies: any;
  favoritedIds: any;
  error: boolean;
}

declare interface IMoviesState {
  // movies: any | {
  //   page: number,
  //   total_results: number,
  //   total_pages: number
  //   results: any,
  // },
  movies: any;
  movie: any;
  popularMovies: any | {
    results: any;
  };
  soonMovies: any;
  topRatedMovies: any;
  // popularMovies: any | {
  //   page: number,
  //   total_results: number,
  //   total_pages: number
  //   results: any,
  // },
  // soonMovies: any | {
  //   page: number,
  //   total_results: number,
  //   total_pages: number
  //   results: any,
  // },
  // topRatedMovies: any | {
  //   page: number,
  //   total_results: number,
  //   total_pages: number
  //   results: any,
  // },
  // movies: any,
  favorites: any[],
  watchLater: [] | null,
  loading: boolean,
  error: boolean,
}

declare interface ISortOrder {
  value: string;
  label: string;
}

declare interface IRatingRuntime {
  min: number;
  max:number;
}

declare interface IFiltersState {
  rating: IRatingRuntime;
  runtime: IRatingRuntime;
  sort_by: ISortOrder;
  order: ISortOrder;
  year: number;
}

