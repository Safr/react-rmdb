import { Location } from 'history';

declare module 'react-toastify' {
  const content: any 
  export const ToastContainer: any
  export const toast: any
  export default content
}
declare interface IMovie {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
declare interface IMovies {
    page: number,
    total_results: number,
    total_pages: number
    results: IMovie[],
}

declare interface ISortOrder {
  value: string;
  label: string;
}

declare interface IRatingRuntime {
  min: number;
  max:number;
}

/**
 * RootStore
 */

declare interface IRouterState {
  location: Location;
  action: string;
}

declare interface IAuthState {
  isAuthenticated: boolean;
  user: Object | null;
  error: boolean;
}

declare interface IModalsState {
    type: any;
    open: boolean;
    args: any;
}

declare interface IFavoritesState {
  favoritedMovies: IMovie[];
  favoritedIds: string[];
  error: boolean;
}

declare interface IWatchLaterState {
  watchLaterMovies: IMovie[];
  watchLaterIds: string[];
  error: boolean;
}

declare interface IMoviesState {
  movies: IMovies;
  movie: IMovie;
  popularMovies: IMovies;
  soonMovies: IMovies;
  topRatedMovies: IMovies;
  favorites: any[],
  watchLater: [] | null,
  loading: boolean,
  error: boolean,
}

declare interface IFiltersState {
  rating: IRatingRuntime;
  runtime: IRatingRuntime;
  sort_by: ISortOrder;
  order: ISortOrder;
  year: number;
}


declare interface IRootState {
  router: IRouterState;
  auth: IAuthState;
  favorites: IFavoritesState;
  filters: IFiltersState;
  modals: IModalsState;
  movies: IMoviesState;
  watchLater: IWatchLaterState;
  user?: any;
}