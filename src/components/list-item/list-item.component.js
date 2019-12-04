import React from 'react';
import {View, Image, Text} from 'react-native';
import listItemStyles from './list-item.styles';

const ListItem = ({item}) => {
  return (
    <View style={listItemStyles.itemViewStyle}>
      <Text style={listItemStyles.nameTextStyle}>{item.title}</Text>
      <Image
        source={item.imageHref ? {uri: item.imageHref} : null}
        style={[listItemStyles.imageStyle]}
      />
      <Text style={listItemStyles.nameTextStyle}>{item.description}</Text>
      <Text>
        ...........................................................................................................
      </Text>
    </View>
  );
};

export {ListItem};
