import React, {useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/scale';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import Header from '../../components/Header';
import AvailableBalance from './component/AvailableBalance';
import CardModal from './component/CardModal';

export default function DebitCardScreen(props) {
  const {navigation} = props;

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <FocusAwareStatusBar
          barStyle="light-content"
          backgroundColor={colors.appBackground}
        />
        <Header title={'Debit Card'} showBack={false} navigation={navigation} />
        <AvailableBalance />
        <CardModal navigation={navigation} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
});
