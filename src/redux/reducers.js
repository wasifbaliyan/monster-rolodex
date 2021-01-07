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
