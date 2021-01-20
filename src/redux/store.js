import { applyMiddleware, combineReducers, createStore } from "redux";
import { searchRobots, fetchRobots, fetchAlbumsAndUsers } from "./reducers";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  searchRobots: searchRobots,
  fetchRobots: fetchRobots,
  fetchAlbumsAndUsers: fetchAlbumsAndUsers,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
