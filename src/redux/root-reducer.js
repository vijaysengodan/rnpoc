import {combineReducers} from 'redux';

import countryDetailsReducer from './country-details/country-details.reducer';

const rootReducer = combineReducers({
  countryDetails: countryDetailsReducer,
});

export default rootReducer;
