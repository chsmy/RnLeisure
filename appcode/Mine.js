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
import MainPage from './MainPage'
export default class Mine extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>我的页面！</Text>
        
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
module.exports = Mine
// AppRegistry.registerComponent('Leisure', () => Leisure);
