import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {ListView} from './list-view.component';

const mockStore = configureStore([]);

describe('list view component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      countryDetails: null,
      failureMessage: undefined,
      isFetching: true,
    });

    // component = renderer.create(
    //   <Provider store={store}>
    //     <ListView />
    //   </Provider>,
    // );
  });

  it('should render the loading state of a list successfully', () => {
    renderer.create(
      <Provider store={store}>
        <ListView />
      </Provider>,
    );
  });
 );
