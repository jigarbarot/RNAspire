import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Assets from '../../assets';
import {wp} from '../utils/scale';
import {colors} from '../theme/colors';
import {ItemSpace} from '../utils/constants';
import {AvenirNext_Bold} from '../theme/font_family';

const Header = props => {
  const {title, navigation, showBack} = props;
  return (
    <View style={styles.header}>
      {showBack && (
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Image
            source={Assets.back}
            style={styles.imgBack}
            resizeMode={'cover'}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title || ''}</Text>
      <Image source={Assets.logo} style={styles.logo} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: ItemSpace,
    marginHorizontal: ItemSpace,
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.white,
    fontSize: wp(24),
    fontFamily: AvenirNext_Bold,
  },
  logo: {
    height: wp(25),
    width: wp(25),
  },
  imgBack: {
    height: wp(30),
    width: wp(30),
    left: -wp(5),
  },
});
