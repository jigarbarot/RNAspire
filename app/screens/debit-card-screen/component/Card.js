import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {colors} from '../../../theme/colors';
import {ItemSpace} from '../../../utils/constants';
import {SCREEN_WIDTH, wp} from '../../../utils/scale';
import Assets from '../../../../assets';
import {connect} from 'react-redux';
import {setShowCard} from '../../../redux/actions/debitCardAction';
import {AvenirNext_Bold, AvenirNext_DemiBold} from '../../../theme/font_family';

const Card = props => {
  const {showCardNumber} = props;
  let number = '5647341124132020';

  const hideCard = cardNumber => {
    let hideNum = [];
    for (let i = 0; i < cardNumber.length; i++) {
      if (i < cardNumber.length - 4) {
        hideNum.push('*');
      } else {
        hideNum.push(cardNumber[i]);
      }
    }
    return hideNum.join('');
  };

  const cardNuber = (showCardNumber ? number : hideCard(number))
    .match(/.{1,4}/g)
    .join('    ');

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => props.setShowCard(!showCardNumber)}>
        <View style={styles.hideShowView}>
          <View style={styles.hideShowContent}>
            <Image
              source={showCardNumber ? Assets.eye_close : Assets.eye}
              style={styles.imgEye}
              resizeMode={'cover'}
            />
            <Text style={styles.txtHideShow}>
              {showCardNumber ? 'Hide card number' : 'Show card number'}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image
          source={Assets.logowithname}
          style={styles.logo}
          resizeMode={'contain'}
        />
        <Text style={styles.txtName}>{'Mark Henry'}</Text>
        <View style={{marginTop: wp(30)}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {Object.assign([], number).map((item, index) => {
              if (index + 1 <= number.length - 4) {
                return !showCardNumber ? (
                  <View
                    key={'number_' + index}
                    style={[
                      styles.dotView,
                      {
                        marginRight: (index + 1) % 4 == 0 ? wp(20) : wp(5),
                      },
                    ]}
                  />
                ) : (
                  <Text
                    key={'number_' + index}
                    style={[
                      styles.txtNumber,
                      {marginRight: (index + 1) % 4 == 0 ? wp(20) : wp(2)},
                    ]}>
                    {item}
                  </Text>
                );
              }
            })}
            <Text style={styles.txtNumber}>
              {number.substr(number.length - 4)}
            </Text>
          </View>
        </View>
        <View style={[styles.row, {marginTop: 20}]}>
          <Text style={styles.txtThru}>Thru: 12/26</Text>
          <View style={styles.row}>
            <Text style={[styles.txtCVV]}>{'CVV: '}</Text>
            <Text style={[styles.txtCVV, !showCardNumber && styles.starView]}>
              {showCardNumber ? '456' : '***'}
            </Text>
          </View>
        </View>
        <Image
          source={Assets.visa}
          style={styles.imgVisa}
          resizeMode={'cover'}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  showCardNumber: state.debitCard.showCardNumber,
});

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    setShowCard: value => dispatch(setShowCard(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appGreen,
    width: SCREEN_WIDTH - ItemSpace * 2,
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: -60,
    padding: wp(25),
  },
  logo: {
    height: wp(30),
    width: wp(75),
    alignSelf: 'flex-end',
    tintColor: 'white',
  },
  txtName: {
    color: colors.white,
    fontSize: wp(22),
    marginTop: wp(20),
    fontFamily: AvenirNext_Bold,
  },
  txtNumber: {
    color: colors.white,
    fontSize: wp(18),
    fontFamily: AvenirNext_DemiBold,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtThru: {
    marginRight: 30,
    color: colors.white,
    fontFamily: AvenirNext_DemiBold,
  },
  txtCVV: {
    color: colors.white,
    fontFamily: AvenirNext_DemiBold,
    fontSize: wp(15),
  },
  imgVisa: {
    height: wp(20),
    width: wp(60),
    alignSelf: 'flex-end',
    tintColor: 'white',
  },
  hideShowView: {
    backgroundColor: 'white',
    position: 'absolute',
    top: -wp(96),
    height: wp(50),
    alignSelf: 'flex-end',
    right: ItemSpace,
    borderRadius: 5,
    paddingTop: wp(8),
    alignItems: 'center',
  },
  hideShowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(12),
  },
  imgEye: {
    height: wp(16),
    width: wp(15),
  },
  txtHideShow: {
    color: colors.appGreen,
    marginLeft: 5,
    fontFamily: AvenirNext_DemiBold,
  },
  dotView: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: colors.white,
  },
  starView: {
    fontSize: wp(24),
    position: 'absolute',
    left: wp(35),
    bottom: -wp(10),
  },
});
