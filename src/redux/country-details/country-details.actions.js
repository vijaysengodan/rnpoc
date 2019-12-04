import CountryDetailsActionTypes from './country-details.actiontypes';
import apiUrls from '../../../constants';

// export const getCountryDetails = countryDetails => ({
//   action: CountryDetailsActionTypes.GET_LIST,
//   payload: countryDetails,
// });

export const fetchCollectionsStart = () => ({
  type: CountryDetailsActionTypes.GET_LIST_START,
});

export const fetchCollectionsSuccess = countryDetails => ({
  type: CountryDetailsActionTypes.GET_LIST_SUCCESS,
  payload: countryDetails,
});

export const fetchCollectionsFailure = errorMessage => ({
  type: CountryDetailsActionTypes.GET_LIST_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  //return fetchCollectionsStart();
  return dispatch => {
    dispatch(fetchCollectionsStart());
    fetch(apiUrls.listUrl)
      .then(response => response.json())
      .then(data => {
        console.clear();
        console.log('response - ', data);
        dispatch(fetchCollectionsSuccess(data));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
