import CountryDetailsActionTypes from './country-details.actiontypes';

export const getCountryDetails = countryDetails => ({
  action: CountryDetailsActionTypes.GET_LIST,
  payload: countryDetails,
});
