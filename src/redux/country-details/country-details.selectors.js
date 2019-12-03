import {createSelector} from 'reselect';

const selectCountry = state => state.country;

export const selectCountryDetails = createSelector(
  [selectCountry],
  countryDetails => (countryDetails ? countryDetails : []),
);
