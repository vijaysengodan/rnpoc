import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar, Text, View} from 'react-native';

import {store} from './src/redux/store';

import ListView from './src/screens/list-view.component';

import colors from './colors';

class App extends React.Component {
  //const {countryDetails} = this.props;
  render() {
    return (
      <Provider store={store}>
        <View>
          <StatusBar barStyle="default" backgroundColor={colors.grey} />
        </View>
        <ListView />
      </Provider>
    );
  }
}

export default App;
