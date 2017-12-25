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
  Button
} from 'react-native';
import { connect } from 'react-redux';

import { getSentence } from '../actions/sentence';
import { logout } from '../actions/auth';

class Home extends Component<{}> {

  handleGetData = () => {
    const { access_token } = this.props.auth;
    //get sentence to action redux
    this.props.getSentence(access_token);
  }

  render() {
    console.log(this.props);
    const { access_token } = this.props.auth;
    const { text } = this.props.sentence;
    return (
      <View style={styles.container}>
        <Text style={styles.textSentence}>
          {text}
        </Text>
        <Text style={styles.instructions}>
          This is Home Page, Tap this button for get some data :)
        </Text>
        <Button
          onPress={this.handleGetData}
          title="Get Some Sentence"
          color="#841584"
        />

        <View style={styles.containerToken}>
          <Button
            onPress={()=>this.props.logout()}
            title="Logout"
            color="#eeeeee"
          />
          <Text style={styles.welcome}>
            Congratulations you successfully signed in with the access_token:
          </Text>
          <Text style={styles.token}>
            {access_token}
          </Text>
        </View>
      </View>
    );
  }
}

mapStateToProps = (state) => {
  return {
    auth : state.auth,
    sentence: state.sentence
  }
}

export default connect(mapStateToProps, { getSentence, logout })(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 14,
    textAlign: 'left',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 20,
  },
  token: {
    fontSize: 10,
    textAlign: 'center',
    textAlign: 'left',
  },
  containerToken: {
    margin: 10,
    position: 'absolute',
    bottom: 0
  },
  textSentence: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#ffffff'
  }
});
