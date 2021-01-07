import { applyMiddleware, combineReducers, createStore } from "redux";
import { searchRobots, fetchRobots } from "./reducers";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  searchRobots: searchRobots,
  fetchRobots: fetchRobots,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
