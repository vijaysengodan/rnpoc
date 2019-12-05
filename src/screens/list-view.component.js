import React from 'react';
import {FlatList, View, Text, Button} from 'react-native';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {
  selectCountryDetails,
  selectTitle,
  selectFailureMessage,
  selectIsListFetching,
  selectIsRefreshing,
} from '../redux/country-details/country-details.selectors';
import {
  fetchCollectionsStartAsync,
  refreshCollectionAsync,
} from '../redux/country-details/country-details.actions';

import {ListItem} from '../components/list-item/list-item.component';
import {Progress} from '../components/progress/progress.component';

import listViewStyles from './list-view.styles';
import {ItemSeperator} from '../components/item-seperator/item-seperator.component';

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
    const {
      countryDetails,
      title,
      isFetching,
      failureMessage,
      isRefreshing,
      refreshCollectionAsync,
    } = this.props;
    //Show the progress message during the api call..
    if (isFetching || isRefreshing) {
      const message = isFetching
        ? 'Loading the content...'
        : 'Refreshing the content...';
      return <Progress message={message} />;
    }
    //Show the failure message in case of api call failed..
    if (failureMessage) {
      return <Progress message={'Failed to load the content!!'} />;
    }
    //render the falt list once we have the data..
    return (
      <View>
        <Text style={listViewStyles.titleStyle}>{title}</Text>
        <Button
          key="btnRefresh"
          title="Refresh"
          style={listViewStyles.buttonStyle}
          onPress={refreshCollectionAsync}
        />
        <FlatList
          initialNumToRender={3}
          data={countryDetails ? countryDetails.rows : []}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <ListItem item={item} />}
          ItemSeparatorComponent={ItemSeperator}
          refreshing={isRefreshing}
        />
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  countryDetails: selectCountryDetails,
  title: selectTitle,
  failureMessage: selectFailureMessage,
  isFetching: selectIsListFetching,
  isRefreshing: selectIsRefreshing,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  refreshCollectionAsync: () => dispatch(refreshCollectionAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
