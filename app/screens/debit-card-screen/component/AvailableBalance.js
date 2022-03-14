import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {ItemSpace, numberWithCommas, OS} from '../../../utils/constants';
import {wp} from '../../../utils/scale';
import {colors} from '../../../theme/colors';
import CurrenyView from '../../../components/Currency';
import {AvenirNext_Medium, AvenirNext_Bold} from '../../../theme/font_family';

const AvailableBalance = () => {
  return (
    <View style={styles.containerBalance}>
      <Text style={styles.txtTitleBalance}>Available Balance</Text>
      <View style={styles.contentBalance}>
        <CurrenyView />
        <Text style={styles.txtBalance}>{numberWithCommas(3000)}</Text>
      </View>
    </View>
  );
};

export default AvailableBalance;

const styles = StyleSheet.create({
  containerBalance: {
    marginHorizontal: ItemSpace,
  },
  txtTitleBalance: {
    color: 'white',
    marginTop: wp(5),
    fontSize: wp(14),
    fontFamily: AvenirNext_Medium,
  },
  contentBalance: {
    flexDirection: 'row',
    marginTop: wp(15),
  },
  txtBalance: {
    color: colors.white,
    fontSize: wp(24),
    marginLeft: wp(10),
    fontFamily: AvenirNext_Bold,
    bottom: OS === 'android' ? wp(10) : wp(5),
  },
});
