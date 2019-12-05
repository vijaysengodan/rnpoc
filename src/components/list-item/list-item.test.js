import React from 'react';

import {ListItem} from './list-item.component';

import renderer from 'react-test-renderer';

it('list item renders correctly', () => {
  const item = {
    title: 'abc',
    description: 'abc desc',
    imgeHref: 'http://google.com/abc.png',
  };
  renderer.create(<ListItem item={item} />);
});

// it('expect to render ListItem component', () => {
//   expect(shallow(<ListItem />)).toMatchSnapshot();
// });
