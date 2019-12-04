import {createSelector} from 'reselect';

const selectCountry = state => state.countryDetails;

export const selectCountryDetails = createSelector(
  [selectCountry],
  countryDetails => (countryDetails ? countryDetails.countryDetails : []),
);
