import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ListItem} from './list-item.component';

configure({adapter: new Adapter()});

it('expect to render ListItem component', () => {
  expect(shallow(<ListItem />)).toMatchSnapshot();
});
