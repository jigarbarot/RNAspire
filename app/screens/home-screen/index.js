import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';

const HomeScreen = props => {
  return (
    <View>
      <FocusAwareStatusBar
        barStyle="dark-content"
      />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
