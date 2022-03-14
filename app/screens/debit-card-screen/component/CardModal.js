import React from 'react';
import {Image, View, StyleSheet, ScrollView, Text, Switch} from 'react-native';
import Card from './Card';
import {colors} from '../../../theme/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH, wp} from '../../../utils/scale';
import {ItemSpace} from '../../../utils/constants';
import Assets from '../../../../assets';
import {connect} from 'react-redux';
import {setWeeklyLimit} from '../../../redux/actions/debitCardAction';
import CardLimitProgress from './CardLimitProgress';
import {
  AvenirNext_Medium,
  AvenirNext_Regular,
} from '../../../theme/font_family';

const CardModal = props => {
  const renderItem = params => {
    const {leftIcon, title, detail, showToggle, toggleSwitch, isEnable} =
      params;

    return (
      <View style={styles.rowItem}>
        <View style={styles.rowItem2}>
          <Image style={styles.imgLeft} source={leftIcon} />
          <View style={styles.itemLeft}>
            <Text style={styles.itemTitle}>{title}</Text>
            <Text style={styles.itemDetail}>{detail}</Text>
          </View>
        </View>
        {showToggle && (
          <Switch
            trackColor={{false: '#EEEEEE', true: colors.appGreen}}
            thumbColor={colors.white}
            ios_backgroundColor="#EEEEEE"
            onValueChange={toggleSwitch}
            value={isEnable}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.modalContainer}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.emptyView} />
        <View style={styles.mainContent}>
          <Card />
          {props.isSetWeeklyLimit && <CardLimitProgress />}

          {renderItem({
            leftIcon: Assets.top_up,
            title: 'Top-up account',
            detail: 'Deposit money to your account to use with card',
            showToggle: false,
          })}

          {renderItem({
            leftIcon: Assets.limit,
            title: 'Weekly spending limit',
            detail: props.isSetWeeklyLimit
              ? `Your weekly spending limit is S$${props.weeklyLimit}`
              : 'You haven’t set any spending limit on card',
            showToggle: true,
            isEnable: props.isSetWeeklyLimit,
            toggleSwitch: () => {
              props.isSetWeeklyLimit
                ? props.setLimit({
                    isSetWeeklyLimit: false,
                    weeklyLimit: 0,
                  })
                : props.navigation.push('CardLimit');
            },
          })}

          {renderItem({
            leftIcon: Assets.freeze,
            title: 'Freeze card',
            detail: 'Your debit card is currently active',
            showToggle: true,
            isEnable: false,
            toggleSwitch: () => null,
          })}

          {renderItem({
            leftIcon: Assets.new_card,
            title: 'Get a new card',
            detail: 'This deactivates your current debit card',
            showToggle: false,
          })}

          {renderItem({
            leftIcon: Assets.deactive,
            title: 'Deactivated cards',
            detail: 'Your previously deactivated cards',
            showToggle: false,
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  isSetWeeklyLimit: state.debitCard.isSetWeeklyLimit,
  weeklyLimit: state.debitCard.weeklyLimit,
});

const mapDispatchToProps = dispatch => {
  return {
    setLimit: data => dispatch(setWeeklyLimit(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  emptyView: {
    height: SCREEN_HEIGHT - SCREEN_HEIGHT * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: 'transparent',
  },
  mainContent: {
    flex: 1,
    minHeight: SCREEN_HEIGHT,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  rowItem: {
    flexDirection: 'row',
    marginHorizontal: ItemSpace,
    marginTop: wp(34),
  },
  rowItem2: {
    flexDirection: 'row',
    flex: 1,
  },
  imgLeft: {
    height: wp(32),
    width: wp(32),
  },
  itemLeft: {
    marginLeft: wp(12),
    flex: 1,
  },
  itemTitle: {
    color: '#25345F',
    fontSize: wp(15),
    fontFamily: AvenirNext_Medium,
  },
  itemDetail: {
    color: '#b2b2b2',
    fontWeight: '400',
    fontSize: wp(13),
    flex: 1,
    marginRight: 5,
    fontFamily: AvenirNext_Regular,
  },
});
