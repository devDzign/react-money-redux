import * as actionType from './actionTypes'
import Api from '../services/Api'

export const getAllCountriesAction = () => {
    return (dispatch) => {
        Api.getAllCountries().then(data => {
            dispatch(
                {
                    type: actionType.ALL_COUNTRIES,
                    countries: getcountriesInfo(data)
                }
            )
        })
    }
}

const getcountriesInfo = (data) => {
    return data.map(country => {
        return {
            name: country.name,
            currencyCode: country.currencies[0].code,
            flag: country.flag,
            code: country.alpha3Code
        }
    }).filter(country => {
        return country.currencyCode !== 'USD'
    })
}


