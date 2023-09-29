import { combineReducers, createStore, applyMiddleware } from "redux";
import HomePage from "./homepage";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  homePage: HomePage,
});

export default rootReducer;

export const store = createStore(rootReducer, applyMiddleware(thunk));
