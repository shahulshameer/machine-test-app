import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    message : 'Data not fetched',
    status : false,
    data : []
};

export const countryReducer = (state = initialState, {type, payload}) => {  
    switch (type) {
        case ActionTypes.FETCH_COUNTRIES_DATA:
            return {...state,  ...payload};
        case ActionTypes.REMOVE_COUNTRIES_DETAIL:
            return {...state,  ...payload};
        default:
            return state;
    }
}