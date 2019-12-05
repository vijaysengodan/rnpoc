import {createSelector} from 'reselect';

const selectCountry = state => state.countryList;

//Select the country details array and returns empty if there is no data
export const selectCountryDetails = createSelector(
  [selectCountry],
  countryList => (countryList ? countryList.countryDetails : []),
);

//Selects the title from the reducer
export const selectTitle = createSelector([selectCountry], countryList =>
  countryList.countryDetails ? countryList.countryDetails.title : '',
);

//Selects the fetching status..
export const selectIsListFetching = createSelector(
  [selectCountry],
  countryList => countryList.isFetching,
);

//Select the failure message
export const selectFailureMessage = createSelector(
  [selectCountry],
  countryList => countryList.errorMessage,
);

//Selects the refreshing status..
export const selectIsRefreshing = createSelector(
  [selectCountry],
  countryList => countryList.isRefreshing,
);
