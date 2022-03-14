import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DebitCardScreen from '../screens/debit-card-screen';
import ProfileScreen from '../screens/profile-screen';
import CreditScreen from '../screens/credit-screen';
import PaymentScreen from '../screens/payment-screen';
import HomeScreen from '../screens/home-screen';
import DebitCardLimitScreen from '../screens/debit-card-screen/debitCardLimit';
import {colors} from '../theme/colors';
import Assets from '../../assets';

import {setTabOptions} from './config';
import {AvenirNext_DemiBold} from '../theme/font_family';

const RootTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DebitStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DebitCard" component={DebitCardScreen} />
      <Stack.Screen name="CardLimit" component={DebitCardLimitScreen} />
    </Stack.Navigator>
  );
};

export default function TabNavigator() {
  return (
    <RootTab.Navigator
      initialRouteName="DebitStack"
      screenOptions={{
        tabBarActiveTintColor: colors.appGreen,
        tabBarInactiveTintColor: '#ddd',
        tabBarLabelStyle: {
          fontFamily: AvenirNext_DemiBold,
        },
      }}>
      <RootTab.Screen
        name="Home"
        component={HomeScreen}
        options={setTabOptions('Home', Assets.logo)}
      />
      <RootTab.Screen
        name="DebitStack"
        component={DebitStack}
        options={{
          ...setTabOptions('Debit Card', Assets.card),
          ...{headerShown: false},
        }}
      />
      <RootTab.Screen
        name="Payment"
        component={PaymentScreen}
        options={setTabOptions('Payment', Assets.payment)}
      />
      <RootTab.Screen
        name="Credit"
        component={CreditScreen}
        options={setTabOptions('Credit', Assets.credit)}
      />
      <RootTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={setTabOptions('Profile', Assets.profile)}
      />
    </RootTab.Navigator>
  );
}
