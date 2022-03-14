import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import Assets from '../../../assets';
import {setLoader} from '../../redux/actions/authAction';

function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      props.setLoader(false);
    }, 1000);
  });
  return (
    <View style={styles.container}>
      <Image
        source={Assets.logowithname}
        style={styles.logo}
        resizeMode={'contain'}
      />
    </View>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    setLoader: isLoading => dispatch(setLoader(isLoading)),
  };
};

export default connect(null, mapDispatchToProps)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 200,
  },
});
