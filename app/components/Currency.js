import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';
import {AvenirNext_Bold} from '../theme/font_family';
import {wp} from '../utils/scale';

const CurrenyView = () => {
  return (
    <View style={styles.currencyView}>
      <Text style={styles.currencyText}>{'S$'}</Text>
    </View>
  );
};

export default CurrenyView;

const styles = StyleSheet.create({
  currencyView: {
    backgroundColor: colors.appGreen,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: wp(22),
  },
  currencyText: {
    marginVertical: wp(2),
    marginHorizontal: wp(12),
    color: 'white',
    fontSize: wp(12),
    fontFamily: AvenirNext_Bold,
  },
});
