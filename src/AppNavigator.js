import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';

export const Root = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: { header: null },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
      headerStyle: {
        backgroundColor: '#F5FCFF',
        elevation: 0,
      },
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#F5FCFF',
        elevation: 0,
      },
    }, }
});

const AppNavigator = ({dispatch, nav}) => {
  return (
    <Root navigation={addNavigationHelpers({ dispatch, state: nav })} />
  );
}

AppNavigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppNavigator)
