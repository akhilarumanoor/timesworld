import {
  GET_FLAG_BEGIN,
  GET_FLAG_SUCCESS,
  GET_FLAG_FAILURE,
} from "./HomePagActionTypes";

import http from "../../Axios/http";

export function getFlag(args = {}) {
  return (dispatch) => {
    dispatch({
      type: GET_FLAG_BEGIN,
    });
    // const paramsParse = Object.keys(args).map((i) => [`${i}=${args[i]}`]);
    const promise = new Promise((resolve, reject) => {
      let doRequest = http.get();
      doRequest.then(
        (res) => {
          dispatch({
            type: GET_FLAG_SUCCESS,
            data: res.data,
          });
          resolve(res);
        },
        (err) => {
          dispatch({
            type: GET_FLAG_FAILURE,
            data: err.response.data,
          });
          reject(err);
        }
      );
    });

    return promise;
  };
}
