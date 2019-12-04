import React from 'react';
import {FlatList, View, Text, Button} from 'react-native';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {
  selectCountryDetails,
  selectTitle,
  selectFailureMessage,
  selectIsListFetching,
} from '../redux/country-details/country-details.selectors';
import {fetchCollectionsStartAsync} from '../redux/country-details/country-details.actions';

import {ListItem} from '../components/list-item/list-item.component';
import listViewStyles from './list-view.styles';

class ListView extends React.Component {
  constructor() {
    super();
    this.state = {
      lastRefresh: Date(Date.now()).toString(),
    };

    this.refreshScreen = this.refreshScreen.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }

  refreshScreen() {
    console.log('refresh');
    this.setState({lastRefresh: Date(Date.now()).toString()});
  }

  render() {
    const {
      countryDetails,
      title,
      isFetching,
      failureMessage,
      dispatch,
    } = this.props;
    //Show the progress message during the api call..
    if (isFetching) {
      return (
        <View>
          <Text style={listViewStyles.statusMsgStyle}>
            Loading the content....
          </Text>
        </View>
      );
    }
    //Show the failure message in case of api call failed..
    if (failureMessage) {
      return (
        <View>
          <Text style={listViewStyles.statusMsgStyle}>
            Failed loading the content
          </Text>
        </View>
      );
    }
    //render the falt list once we have the data..
    return (
      <View>
        <Text style={listViewStyles.titleStyle}>{title}</Text>
        <Button
          key="btnRefresh"
          title="Refresh"
          style={listViewStyles.buttonStyle}
          onPress={this.refreshScreen}
        />
        <FlatList
          data={countryDetails ? countryDetails.rows : []}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <ListItem item={item} />}
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
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
