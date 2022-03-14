import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import {connect} from 'react-redux';
import {colors} from '../../../theme/colors';
import {
  AvenirNext_DemiBold,
  AvenirNext_Medium,
  AvenirNext_Regular,
} from '../../../theme/font_family';
import {ItemSpace} from '../../../utils/constants';
import {SCREEN_WIDTH, wp} from '../../../utils/scale';

const CardLimitProgress = props => {
  const spentAmount = 300;
  const progressPercent =
    props.weeklyLimit > 0 ? spentAmount / props.weeklyLimit : 0;
  return (
    <View style={{marginTop: wp(25)}}>
      <View style={styles.itemRow}>
        <Text style={{color: '#222222', fontFamily: AvenirNext_Medium}}>
          Debit card spending limit
        </Text>
        <Text style={styles.txtLable}>
          {`$${spentAmount} | `}
          <Text style={styles.txtAmount}>{`$${props.weeklyLimit}`}</Text>
        </Text>
      </View>
      <Progress.Bar
        progress={
          progressPercent > 0 && progressPercent < 1
            ? progressPercent
            : progressPercent <= 0
            ? 0
            : progressPercent >= 1
            ? 1
            : 0
        }
        width={SCREEN_WIDTH - ItemSpace * 2}
        style={{marginLeft: ItemSpace, marginTop: 6}}
        color={colors.appGreen}
        borderWidth={0}
        unfilledColor={'#e5faf0'}
        height={wp(15)}
        borderRadius={10}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  isSetWeeklyLimit: state.debitCard.isSetWeeklyLimit,
  weeklyLimit: state.debitCard.weeklyLimit,
});

export default connect(mapStateToProps, null)(CardLimitProgress);

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: ItemSpace,
  },
  txtAmount: {
    color: '#22222233',
    fontFamily: AvenirNext_Regular,
  },
  txtLable: {
    color: colors.appGreen,
    fontFamily: AvenirNext_DemiBold,
  },
});
