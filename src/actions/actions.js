import * as actionType from './actionTypes'
import Api from '../services/Api'

export const getAllCountriesAction = () => {
    return (dispatch) => {
            Api.getAllCountries().then(data => {
                dispatch({ type: actionType.ALL_COUNTRIES, countries: data })
            })
    }
}


