import {StyleSheet} from 'react-native';
import colors from '../../colors';
import fonts from '../../fonts';

const listViewStyles = StyleSheet.create({
  titleStyle: {
    fontFamily: fonts.regular,
    color: colors.grayDark,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
  },
  buttonStyle: {
    fontFamily: fonts.regular,
    color: colors.purple,
    fontSize: 18,
    width: 50,
    textAlign: 'center',
  },
  statusMsgStyle: {
    fontFamily: fonts.regular,
    color: colors.grayDark,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default listViewStyles;
