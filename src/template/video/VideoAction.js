import {queryFavoriteMoviesUri, queryMovieDetailUri} from "../common/Uri";
import {
  TYPE_QUERY_FAVORITE_MOVIE,
  TYPE_QUERY_MOVIE_DETAIL
} from "../common/AppActionTypes";

require('es6-promise').polyfill();
require('isomorphic-fetch');

/**
 * Query the video list to show in home page
 * @returns {Function}
 */
export function queryMovieDetail(movieId) {
  var url = queryMovieDetailUri.replace("{id}", movieId);
  return (dispatch) => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.status >= 400) {
        throw new Error(
            `Bad response and the status code is ${response.status}`);
      }
      return response.json();//return a Promise object
    }).then(data => {
      dispatch({type: TYPE_QUERY_MOVIE_DETAIL, result: data});
    }).catch(error => {
      console.error(error);
    });

  }
}

/**
 * Query favorite movie list
 * @param videoType
 * @returns {Function}
 */
export function queryFavoriteMovies(videoType) {
  var url = queryFavoriteMoviesUri + videoType;
  return (dispatch) => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.status >= 400) {
        throw new Error(
            `Bad response and the status code is ${response.status}`);
      }
      return response.json();//return a Promise object
    }).then(data => {
      dispatch({type: TYPE_QUERY_FAVORITE_MOVIE, result: data});
    }).catch(error => {
      console.error(error);
    });

  }
}