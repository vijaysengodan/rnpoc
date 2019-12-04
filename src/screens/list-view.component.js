import React from 'react';
import {FlatList, View, Text} from 'react-native';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCountryDetails} from '../redux/country-details/country-details.selectors';
import {fetchCollectionsStartAsync} from '../redux/country-details/country-details.actions';

import {ListItem} from '../components/list-item/list-item.component';

class ListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const {countryDetails} = this.props;
    return (
      <View>
        <Text>Total - {countryDetails.rows.length}</Text>
        <FlatList
          data={countryDetails.rows}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <ListItem item={item} />}
        />
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  countryDetails: selectCountryDetails,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
