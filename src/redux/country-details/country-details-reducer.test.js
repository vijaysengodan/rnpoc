import CountryDetailsActionTypes from './country-details.actiontypes';
import countryDetailsReducer from './country-details.reducer';

describe('countryDetailsReducer', () => {
  const INITIAL_STATE = {
    countryDetails: null,
    isFetching: false,
    errorMessage: undefined,
  };

  it('shoud return the initial state', () => {
    expect(countryDetailsReducer(undefined, {})).toEqual({
      countryDetails: null,
      isFetching: false,
      errorMessage: undefined,
    });
  });

  it(`shoud handle the ${CountryDetailsActionTypes.GET_LIST_START} action`, () => {
    expect(
      countryDetailsReducer(INITIAL_STATE, {
        type: CountryDetailsActionTypes.GET_LIST_START,
      }),
    ).toEqual({
      countryDetails: null,
      errorMessage: undefined,
      isFetching: true,
    });
  });

  it(`shoud handle the ${CountryDetailsActionTypes.GET_LIST_SUCCESS} action`, () => {
    expect(
      countryDetailsReducer(INITIAL_STATE, {
        type: CountryDetailsActionTypes.GET_LIST_SUCCESS,
        payload: {
          title: 'About canada',
          rows: [
            {
              name: 'mountain',
              description: 'abc',
              imageHref: 'http://google.com/abc.png',
            },
          ],
        },
      }),
    ).toEqual({
      countryDetails: {
        title: 'About canada',
        rows: [
          {
            name: 'mountain',
            description: 'abc',
            imageHref: 'http://google.com/abc.png',
          },
        ],
      },
      errorMessage: undefined,
      isFetching: false,
    });
  });

  it(`shoud handle the ${CountryDetailsActionTypes.GET_LIST_FAILURE} action`, () => {
    expect(
      countryDetailsReducer(INITIAL_STATE, {
        type: CountryDetailsActionTypes.GET_LIST_FAILURE,
        payload: 'error message',
      }),
    ).toEqual({
      countryDetails: null,
      errorMessage: 'error message',
      isFetching: false,
    });
  });
});
