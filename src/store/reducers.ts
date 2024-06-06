import { combineReducers } from "@reduxjs/toolkit";
import foodSlice from "./slices/foodSlice";

const rootReducer = combineReducers({
  food: foodSlice,
});

export default rootReducer;
