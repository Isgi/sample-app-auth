/**
 * Sample React Native Login
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';

import { login, authentication } from '../actions/auth';

class Login extends Component<{}> {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isChecking: false
    }
  }

  async componentWillMount(){
    this.setState({isChecking: true})
    try {
      const access_token = await AsyncStorage.getItem('@access_token');
      this.props.authentication(access_token);
      this.setState({isChecking: false})
    } catch (error) {
      this.setState({isChecking: false})
      // Error retrieving data or empty
    }
  }

  handleLogin = () => {
    const { username, password, isChecking } = this.state;
    if (username != '' || password != '') {
      this.props.login({username, password});
    } else {
      alert('Sorry, username and password is required');
    }
  }

  render() {
    const { username, password, isChecking } = this.state;

    //show loader when checking token
    if (isChecking) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#333333" />
          <Text>Checking...</Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, please login here
        </Text>

        <View style={styles.form}>
          <View style={styles.containerTextInput}>
            <Text style={styles.labelInput}>Username</Text>
            <TextInput
              autoCapitalize='none'
              placeholder='Username ex: heri_sutoyo'
              style={styles.textInput}
              onChangeText={(username) => this.setState({username})}
              underlineColorAndroid='transparent'
              value={username}
            />
          </View>
          <View style={styles.containerTextInput}>
            <Text style={styles.labelInput}>Password</Text>
            <TextInput
              secureTextEntry={true}
              placeholder='Password'
              style={styles.textInput}
              onChangeText={(password) => this.setState({password})}
              underlineColorAndroid='transparent'
              value={password}
            />
          </View>
          <View style={styles.containerButton}>
            <Button
              onPress={this.handleLogin}
              title="Login"
              color="#841584"
            />
          </View>
          <View style={styles.containerButton}>
            <Button
              onPress={()=>{this.props.navigation.navigate('Register')}}
              title="Register"
              color="#eeeeee"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default connect(null, { login, authentication })(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    borderColor: '#bebebe',
    borderWidth: 0.5,
    borderRadius: 5
  },
  containerTextInput: {
    marginTop: 10,
  },
  labelInput: {
    marginBottom: 5
  },
  form: {
    marginTop: 20,
    justifyContent: 'center',
    width: 250,
  },
  containerButton: {
    marginTop: 30
  }
});
