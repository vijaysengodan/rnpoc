import React from 'react';
import {connect, Provider} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

import {store} from './src/redux/store';

import {selectCountryDetails} from './src/redux/country-details/country-details.selectors';

import styles from './src/App.styles';
import colors from './colors';

class App extends React.Component {
  //const {countryDetails} = this.props;
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Text>POC Project</Text>
          <StatusBar barStyle="default" backgroundColor={colors.grey} />
        </View>
      </Provider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  countryDetails: selectCountryDetails,
});

export default App;
