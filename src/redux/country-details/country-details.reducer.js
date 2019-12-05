import CountryDetailsActionTypes from './country-details.actiontypes';

const INITIAL_STATE = {
  countryDetails: null,
  isFetching: false,
  errorMessage: undefined,
  isRefreshing: false,
};

//Country details reducer to hold the entire cuntry json object..
const countryDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CountryDetailsActionTypes.GET_LIST_START:
      return {
        ...state,
        isFetching: true,
      };
    case CountryDetailsActionTypes.GET_LIST_SUCCESS:
      return {
        ...state,
        countryDetails: action.payload,
        isFetching: false,
        errorMessage: undefined,
        isRefreshing: false,
      };
    case CountryDetailsActionTypes.GET_LIST_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
        isRefreshing: false,
      };
    case CountryDetailsActionTypes.REFRESH_LIST:
      return {
        ...state,
        isRefreshing: true,
      };
    default:
      return state;
  }
};

export default countryDetailsReducer;
