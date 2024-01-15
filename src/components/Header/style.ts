import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    backgroundColor: COLORS.primaryBlue,
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftSubContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subContainerMiddle: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 21,
    fontWeight: '500',
    color: COLORS.white,
    letterSpacing: 2.5,
    marginLeft: '2%',
  },
  imageSize: {
    width: 35,
    height: 35,
  },
  middleImageSize: {
    width: 30,
    height: 30,
  },
});
