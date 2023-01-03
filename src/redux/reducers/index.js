import { combineReducers } from "redux";
import { countryReducer } from "./countryReducer";

const reducers = combineReducers({
    countriesState: countryReducer,
});

export default reducers;