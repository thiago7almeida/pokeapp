import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';
import {Responsive} from './Responsive';

const isPad = Platform.OS === 'ios' && Platform.isPad;

// Guideline sizes are based on iphone 11/ipad Air(5th) width and height
const guideline = {
  height: isPad ? 1100 : 800,
  width: isPad ? 800 : 400,
};

export default new Responsive(
  guideline,
  Dimensions.get('window'),
  PixelRatio.roundToNearestPixel,
  StatusBar.currentHeight,
);
