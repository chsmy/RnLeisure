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
  Navigator,
} from 'react-native';
import LoginPage from './appcode/LoginPage'
export default class Leisure extends Component {
  render() {
      let defaultName = 'loginPage';
      let defaultComponent = LoginPage;
    return (
        <Navigator
      styles = {styles.container}
      initialRoute = {{name: defaultName,component : defaultComponent}}
      configureScene = {
        (route)=>{
          return Navigator.SceneConfigs.FloatFromRight
        }
      }
      renderScene = {(route,navigator)=>{
          let Component = route.component;
          return <Component{...route.params} navigator={navigator}/>
      }}
      />
      
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
 
});

AppRegistry.registerComponent('Leisure', () => Leisure);
