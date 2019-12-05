import {StyleSheet} from 'react-native';
import colors from '../../../colors';
import fonts from '../../../fonts';

const progressStyles = StyleSheet.create({
  statusMsgStyle: {
    fontFamily: fonts.regular,
    color: colors.grayDark,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default progressStyles;
