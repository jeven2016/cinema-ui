import {queryHomeList} from "../common/Uri";
import {TYPE_QUERY_VIDEO_LIST} from "../common/AppActionTypes";
import "whatwg-fetch";

require('es6-promise').polyfill();
require('isomorphic-fetch');

/**
 * Query the video list to show in home page
 * @returns {Function}
 */
export function queryVideoList(username, password) {
  return (dispatch) => {
    fetch(queryHomeList, {
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
      dispatch({type: TYPE_QUERY_VIDEO_LIST, result: data});
    }).catch(error => {
      console.error(error);
    });

  }
}