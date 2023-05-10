import { combineReducers } from "redux";

import carReducer from "./carReducer"
import userReducer from "./userReducer"

const rootRed = combineReducers({
    user:userReducer,
    car:carReducer
})

export default rootRed;
