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
