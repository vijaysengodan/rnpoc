import CountryDetailsActionTypes from './country-details.actiontypes';

const INITIAL_STATE = {};

const countryDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CountryDetailsActionTypes.GET_LIST:
      return {
        ...state,
        placeList: action.payload,
      };
    default:
      return state;
  }
};

export default countryDetailsReducer;
