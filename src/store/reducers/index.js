import { combineReducers } from "redux"
import ironManReducer from "./ironManReducer"
import searchReducer from "./searchReducer"

const reducer = combineReducers({
  ironManReducer,
  searchReducer,
});

export default reducer
