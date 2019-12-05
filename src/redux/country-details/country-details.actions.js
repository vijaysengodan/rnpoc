import CountryDetailsActionTypes from './country-details.actiontypes';
import apiUrls from '../../../constants';

export const refreshContent = () => ({
  type: CountryDetailsActionTypes.REFRESH_LIST,
});

//For the aync start dispatch event to show the progress..
export const fetchCollectionsStart = () => ({
  type: CountryDetailsActionTypes.GET_LIST_START,
});

//For the success dispatch event
export const fetchCollectionsSuccess = countryDetails => ({
  type: CountryDetailsActionTypes.GET_LIST_SUCCESS,
  payload: countryDetails,
});

//For the failure dispatch event
export const fetchCollectionsFailure = errorMessage => ({
  type: CountryDetailsActionTypes.GET_LIST_FAILURE,
  payload: errorMessage,
});

//Fecthing aync data from service
export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    dispatch(fetchCollectionsStart());
    fetch(apiUrls.listUrl)
      .then(response => response.json())
      .then(data => {
        //console.clear();
        //console.log('response - ', data);
        dispatch(fetchCollectionsSuccess(data));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
