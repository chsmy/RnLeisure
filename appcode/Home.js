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
  ListView,
  RefreshControl
} from 'react-native';
import MainPage from './MainPage'
import Animation from './Animation'

export default class Home extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>首页！</Text>

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
  },

});
module.exports = Home

