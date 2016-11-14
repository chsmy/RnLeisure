/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class LoginPage extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>欢迎欢迎!</Text>
        <Text style={styles.welcome}>我是主页!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 100,
  },

  header: {
    height: 70,
    width: 70,

  }
});
module.exports = LoginPage
// AppRegistry.registerComponent('Leisure', () => Leisure);
