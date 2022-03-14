import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../theme/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH, wp} from '../../utils/scale';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import Header from '../../components/Header';
import {ItemSpace, numberWithCommas} from '../../utils/constants';
import Assets from '../../../assets';
import CurrenyView from '../../components/Currency';
import {connect} from 'react-redux';
import {setWeeklyLimit} from '../../redux/actions/debitCardAction';
import {
  AvenirNext_Bold,
  AvenirNext_DemiBold,
  AvenirNext_Medium,
  AvenirNext_Regular,
} from '../../theme/font_family';

const DebitCardLimitScreen = props => {
  const [cardAmount, setCardAmount] = useState(0);

  const setDebitCardLimit = () => {
    props.setLimit({
      isSetWeeklyLimit: true,
      weeklyLimit: cardAmount,
    });
    props.navigation.pop();
  };

  const renderSuggestion = amount => {
    return (
      <TouchableOpacity
        style={styles.suggestionView}
        onPress={() => setCardAmount(amount)}>
        <Text style={styles.txtSuggestion}>{`S$ ${numberWithCommas(
          amount,
        )}`}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <FocusAwareStatusBar
          barStyle="light-content"
          backgroundColor={colors.appBackground}
        />
        <Header title={''} showBack={true} navigation={props.navigation} />
        <Text style={styles.txtTitle}>Spending limit</Text>
        <View style={styles.mainContent}>
          <View style={styles.content}>
            <View style={styles.row}>
              <Image source={Assets.limit2} style={styles.imgLimit} />
              <Text style={styles.txtTitle2}>
                {'Set a weekly debit card spending limit'}
              </Text>
            </View>
            <View style={[styles.row, styles.inputView]}>
              <CurrenyView />
              <Text style={styles.txtInput}>
                {numberWithCommas(cardAmount)}
              </Text>
            </View>
            <Text style={styles.txtNote}>
              {'Here weekly means the last 7 days - not the calendar week'}
            </Text>
            <View style={[styles.row, {marginTop: wp(20)}]}>
              {renderSuggestion(5000)}
              {renderSuggestion(10000)}
              {renderSuggestion(20000)}
            </View>
            <TouchableOpacity
              style={[
                styles.btnSave,
                {
                  backgroundColor: cardAmount
                    ? colors.appGreen
                    : 'rgba(238, 238, 238, 1)',
                },
              ]}
              onPress={() => setDebitCardLimit()}
              disabled={!cardAmount}>
              <Text style={styles.txtSave}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setLimit: data => dispatch(setWeeklyLimit(data)),
  };
};

export default connect(null, mapDispatchToProps)(DebitCardLimitScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  txtTitle: {
    color: colors.white,
    fontSize: wp(24),
    marginLeft: ItemSpace,
    fontFamily: AvenirNext_Bold,
  },
  mainContent: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: wp(40),
  },
  imgLimit: {
    height: wp(16),
    width: wp(16),
    marginRight: wp(12),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: wp(13),
  },
  content: {
    flex: 1,
    marginVertical: wp(30),
    marginHorizontal: ItemSpace,
  },
  inputView: {
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 0.7,
    paddingBottom: wp(13),
  },
  txtNote: {
    color: 'rgba(34, 34, 34, 0.4)',
    fontSize: wp(13),
    fontFamily: AvenirNext_Regular,
  },
  suggestionView: {
    backgroundColor: '#effcf4',
    flex: 1,
    paddingHorizontal: wp(15),
    paddingVertical: wp(12),
    marginRight: wp(12),
    borderRadius: 5,
  },
  txtSuggestion: {
    fontSize: wp(14),
    color: colors.appGreen,
    textAlign: 'center',
    fontFamily: AvenirNext_DemiBold,
  },
  txtInput: {
    flex: 1,
    fontSize: wp(24),
    color: 'rgba(34, 34, 34, 1)',
    marginLeft: wp(10),
    fontFamily: AvenirNext_Bold,
  },
  btnSave: {
    height: wp(56),
    width: SCREEN_WIDTH - wp(60) * 2,
    borderRadius: wp(56) / 2,
    alignSelf: 'center',
    position: 'absolute',
    bottom: wp(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtSave: {
    color: colors.white,
    fontSize: wp(16),
    fontFamily: AvenirNext_DemiBold,
  },
  txtTitle2: {
    color: 'rgba(34, 34, 34, 1)',
    fontFamily: AvenirNext_Medium,
  },
});
