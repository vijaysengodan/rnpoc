import {StyleSheet} from 'react-native';
import colors from '../../../colors';
import fonts from '../../../fonts';

const listItemStyles = StyleSheet.create({
  imageStyle: {
    backgroundColor: colors.grayUltraLight,
    width: 90,
    height: 90,
    marginLeft: 50,
    borderRadius: 5,
  },

  itemViewStyle: {
    flex: 1,
    justifyContent: 'center',
  },

  nameTextStyle: {
    fontFamily: fonts.regular,
    color: colors.grayDark,
    fontSize: 18,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
  },
});

export default listItemStyles;
