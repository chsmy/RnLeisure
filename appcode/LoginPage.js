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
export default class LoginPage extends Component {
  clickJump() {
    //因为Navigator <Component {...route.params} navigator={navigator} />传入了navigator 所以这里能取到navigator
    const {navigator} = this.props;
    if (navigator) {
      navigator.push({
        name: "MainPage",
        component: MainPage
      })
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>欢迎欢迎!</Text>
        <Image source={require('../imgs/launcher.png')} style={styles.header}/>
        
        <TextInput
          style={styles.style_user_input}
          placeholder='请输入账号'
          numberOfLines={1}
          // autoFocus={true}
          underlineColorAndroid={'transparent'}
          textAlign='center'
          />
        <View
          style={{ height: 1, backgroundColor: '#f4f4f4' }}
          />
        <TextInput
          style={styles.style_pwd_input}
          placeholder='请输入密码'
          numberOfLines={1}
          underlineColorAndroid={'transparent'}
          secureTextEntry={true}
          textAlign='center'
          />

        <TouchableHighlight
          underlayColor="#0588fe"
          activeOpacity={0.5}
          style={styles.style_view_commit}
          onPress={this.clickJump.bind(this)}
          >
          <Text style={{ color: '#fff' }}>登录</Text>
        </TouchableHighlight>
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
  style_user_input: {
    backgroundColor: '#fff',
    marginTop: 10,
    height: 35,
  },
  style_pwd_input: {
    backgroundColor: '#fff',
    height: 35,
  },
  style_view_commit: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#63B8FF',
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 70,
    width: 70,
    alignSelf:'center',
  }
});
module.exports = LoginPage
// AppRegistry.registerComponent('Leisure', () => Leisure);
