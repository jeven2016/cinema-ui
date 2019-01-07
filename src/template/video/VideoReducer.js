import {
  TYPE_QUERY_FAVORITE_MOVIE,
  TYPE_QUERY_MOVIE_DETAIL,
  TYPE_QUERY_MOVIE_PAGE
} from '../common/AppActionTypes';

export const movieDetail = (state = {
      name: null, videoType: null
    },
    action) => {
  if (action.type === TYPE_QUERY_MOVIE_DETAIL) {
    return {...action.result};
  }
  return state;
};

/**
 * reducer for retrieveing favorite movies
 * Note: normally the state should be merged with action.result and return the
 * new state then.
 * @param state init a state for initialization
 * @param action
 * @returns {*}
 */
export const favoriteMovies = (state = [],
    action) => {
  if (action.type === TYPE_QUERY_FAVORITE_MOVIE) {
    return [...action.result]; // return the list of favorite videos
  }
  return state;
};

export const videoPage = (state = {},
    action) => {
  if (action.type === TYPE_QUERY_MOVIE_PAGE) {
    return {...action.result}; // return the list of favorite videos
  }
  return state;
};