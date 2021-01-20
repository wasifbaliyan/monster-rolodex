import { actionTypes } from "./actionTypes";

const initialStateSearch = {
  searchField: "",
};

const initialStateRobots = {
  monsters: [],
  isLoading: false,
  errors: "",
};

export const searchRobots = (state = initialStateSearch, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const fetchRobots = (state = initialStateRobots, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_ROBOTS_PENDING:
      return { ...state, isLoading: true };
    case actionTypes.REQUEST_ROBOTS_SUCCESS:
      return { ...state, isLoading: false, monsters: action.payload };
    case actionTypes.REQUEST_ROBOTS_FAILED:
      return { ...state, isLoading: false, errors: action.payload };
    default:
      return state;
  }
};

const initialStateAlbumsAndUsers = {
  albums: [],
  loading: true,
  errors: "",
};

export const fetchAlbumsAndUsers = (
  state = initialStateAlbumsAndUsers,
  action
) => {
  switch (action.type) {
    case actionTypes.FETCH_ALBUMS_AND_USERS_PENDING:
      return { ...state, loading: true };
    case actionTypes.FETCH_ALBUMS_AND_USERS_SUCCESS:
      return { ...state, loading: false, albums: action.payload };
    case actionTypes.FETCH_ALBUMS_AND_USERS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    default:
      return state;
  }
};
