import * as actions from './country-details.actions';
import CountryDetailsActionTypes from './country-details.actiontypes';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('countryDetailsActions', () => {
  it('shoud create an action to get the list', () => {
    const text = 'failure test';
    const expectedAction = {
      type: CountryDetailsActionTypes.GET_LIST_FAILURE,
      payload: text,
    };
    expect(actions.fetchCollectionsFailure(text)).toEqual(expectedAction);
  });

  it('handles requsting country details list API', () => {
    const store = mockStore();
    store.dispatch(actions.fetchCollectionsStartAsync());
    const action = store.getActions();
    const expectedAction = {
      type: CountryDetailsActionTypes.GET_LIST_START,
    };
    expect(action[0]).toEqual(expectedAction);
  });
});
