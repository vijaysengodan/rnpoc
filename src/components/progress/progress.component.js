import React from 'react';
import {View, Text} from 'react-native';
import progressStyles from './progress.styles';

export const Progress = ({message}) => {
  return (
    <View>
      <Text style={progressStyles.statusMsgStyle}>{message}</Text>
    </View>
  );
};
