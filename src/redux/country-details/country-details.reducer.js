import CountryDetailsActionTypes from './country-details.actiontypes';

const INITIAL_STATE = {
  countryDetails: null,
  isFetching: false,
  errorMessage: undefined,
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
      };
    case CountryDetailsActionTypes.GET_LIST_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default countryDetailsReducer;
