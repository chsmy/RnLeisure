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
  BackAndroid,
} from 'react-native';

export default class MainPage extends Component {
 constructor (props) {
    super(props)
    this.handleBack = this._handleBack.bind(this)
  }

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBack)
  }

  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBack)
  }

  _handleBack () {
    var navigator = this.navigator

    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop()
      return true
    }
    return false
  }

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
module.exports = MainPage
// AppRegistry.registerComponent('Leisure', () => Leisure);
