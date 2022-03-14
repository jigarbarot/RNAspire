import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';

export default function ProfileScreen(props) {
  return (
    <View>
      <FocusAwareStatusBar
        barStyle="dark-content"
      />
      <Text>ProfileScreen</Text>
    </View>
  );
}
