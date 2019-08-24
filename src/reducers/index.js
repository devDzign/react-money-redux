import {combineReducers} from 'redux'
import ReducerCountries from './ReducerCountries'


const rootReducer = combineReducers({
    countriesRootReducer: ReducerCountries,

})

export default rootReducer;