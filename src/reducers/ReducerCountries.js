import * as actionTypes from '../actions/actionTypes';

const initialState = {
    countries: []
};

const reducerCountries = (state= initialState , action) => {

    switch (action.type) {
        case actionTypes.ALL_COUNTRIES:
            console.log('reducersCountries', action.countries)
            return {
                ...state,
                countries: action.countries
            }
        default:
            return state;
    }
};

export default reducerCountries;