import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCountryDetails} from '../redux/country-details/country-details.selectors';

import {Text} from 'react-native';

class ListView extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <Text>POC Screen</Text>;
  }
}

const mapStateToProps = createStructuredSelector({
  countryDetails: selectCountryDetails,
});

export default connect(mapStateToProps)(ListView);
