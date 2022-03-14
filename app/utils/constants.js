import {Platform, Dimensions} from 'react-native';
import {wp} from './scale';

export const OS = Platform.OS;
export const ItemSpace = wp(20);

export const numberWithCommas = x => {
  return x > 0 ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0';
};
