/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Image} from 'react-native';

const setTabOptions = (tabLable, tabIcon) => {
  return {
    tabBarLabel: tabLable,
    tabBarIcon: ({color, size}) => (
      <Image
        source={tabIcon}
        style={{
          height: size,
          width: size,
          tintColor: color,
        }}
        resizeMode={'center'}
      />
    ),
  };
};

export {setTabOptions};
