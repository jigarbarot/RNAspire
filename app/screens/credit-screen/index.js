import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';

export default function CreditScreen(props) {
  return (
    <View>
      <FocusAwareStatusBar
        barStyle="dark-content"
      />
      <Text>CreditScreen</Text>
    </View>
  );
}
