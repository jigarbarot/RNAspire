import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import {connect} from 'react-redux';

const AppNavigator = props => {
  const {authLoader} = props;
  return (
    <NavigationContainer>
      {authLoader ? <AuthNavigator /> : <TabNavigator />}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  authLoader: state.auth.authLoader,
});

export default connect(mapStateToProps, null)(AppNavigator);
