import { actionTypes } from "./actionTypes";

export const setSearchField = (text) => ({
  type: actionTypes.CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => (dispatch) => {
  dispatch({ type: actionTypes.REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) =>
      dispatch({ type: actionTypes.REQUEST_ROBOTS_SUCCESS, payload: data })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.REQUEST_ROBOTS_FAILED, payload: err })
    );
};

export const fetchAlbumsAndUsers = () => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_ALBUMS_AND_USERS_PENDING });
  Promise.all([
    fetch("https://jsonplaceholder.typicode.com/albums"),
    fetch("https://jsonplaceholder.typicode.com/users"),
  ])
    .then(function (responses) {
      return Promise.all(
        responses.map(function (response) {
          return response.json();
        })
      );
    })
    .then(function (data) {
      dispatch({
        type: actionTypes.FETCH_ALBUMS_AND_USERS_SUCCESS,
        payload: data,
      });
    })
    .catch(function (error) {
      dispatch({
        type: actionTypes.FETCH_ALBUMS_AND_USERS_FAILED,
        payload: error,
      });
    });
};
