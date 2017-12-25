/**
 * Sample React Native Register
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
  Button
} from 'react-native';
import { connect } from 'react-redux';

import { register } from '../actions/auth';

class Register extends Component<{}> {

  constructor() {
    super();
    this.state = {
      name: '',
      username: '',
      password: '',
    }
  }

  handleRegister = () => {
    const { username, password, name } = this.state;
    if (username != '' || password != '' || name != '') {
      this.props.register({username, password, name});
    } else {
      alert('Sorry, name, username and password is required');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Register here
        </Text>
        <View style={styles.form}>
          <View style={styles.containerTextInput}>
            <Text style={styles.labelInput}>Name</Text>
            <TextInput
              placeholder='Your name, ex: Heri Sutoyo'
              style={styles.textInput}
              onChangeText={(name) => this.setState({name})}
              underlineColorAndroid='transparent'
              value={this.state.name}
            />
          </View>
          <View style={styles.containerTextInput}>
            <Text style={styles.labelInput}>Username</Text>
            <TextInput
              autoCapitalize='none'
              placeholder='Username ex: heri_sutoyo'
              style={styles.textInput}
              onChangeText={(username) => this.setState({username})}
              underlineColorAndroid='transparent'
              value={this.state.username}
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
              value={this.state.password}
            />
          </View>
          <View style={styles.containerButton}>
            <Button
              onPress={this.handleRegister}
              title="Register"
              color="#841584"
            />
          </View>
          <View style={styles.containerButton}>
            <Button
              onPress={()=>{this.props.navigation.goBack()}}
              title="Back to login"
              color="#eeeeee"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default connect(null, { register })(Register)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
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
