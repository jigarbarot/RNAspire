import * as React from 'react';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

let visibleTabArray = ['Home', 'DebitCard', 'Payment', 'Credit', 'Profile'];

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
}

export default FocusAwareStatusBar;
