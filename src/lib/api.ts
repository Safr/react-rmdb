import { request } from 'lib/helpers';
import { API_KEY, PATH_BASE, PATH_DISCOVER, PATH_MOVIE, PATH_PAGE } from 'lib/constants/searchConfig';

export default {
  getOrders: () => {},
  getMovies: (page: number) => request('get', `${PATH_BASE}${PATH_DISCOVER}${PATH_MOVIE}?api_key=${API_KEY}&${PATH_PAGE}${page}`),
  getOrderBook: pair => request('get', `/order_book/?limit=50&pair=${pair}`),
};


// getMovies = (page) => {
//   fetch(`
//     ${PATH_BASE}${PATH_DISCOVER}${PATH_MOVIE}?api_key=${API_KEY}&${PATH_PAGE}${page}
//     &language=en-US&region=us&include_adult=false&vote_count.gte=200
//     &primary_release_year=${this.props.filters.year}
//     &vote_average.gte=${this.props.filters.rating.min}
//     &vote_average.lte=${this.props.filters.rating.max}
//     &with_runtime.gte=${this.props.filters.runtime.min}
//     &with_runtime.lte=${this.props.filters.runtime.max}
//     &sort_by=${this.props.filters.sort_by.value}.${this.props.filters.order.value}`
//   )
//   .then(response => response.json())
//   .then(movies => {
//     this.setMovies(movies)
//   });
// }
