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
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home';
import Picture from './Picture';
import Found from './Found';
import Mine from './Mine';
export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            renderIcon={() => <Image source={require('../imgs/tab_comprehensive_icon.png')} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={require('../imgs/tab_comprehensive_pressed_icon.png')} style={styles.iconStyle}/>}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <Home {...this.props} />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'picture'}
            title="Picture"
            renderIcon={() => <Image source={require('../imgs/tab_move_icon.png')} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={require('../imgs/tab_move_pressed_icon.png')} style={styles.iconStyle}/>}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'picture' })}>
            <Picture {...this.props} />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'found'}
            title="Found"
            renderIcon={() => <Image source={require('../imgs/tab_found_icon.png')} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={require('../imgs/tab_found_pressed_icon.png')} style={styles.iconStyle}/>}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'found' })}>
            <Found {...this.props} />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'mine'}
            title="Mine"
            renderIcon={() => <Image source={require('../imgs/tab_me_icon.png')} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={require('../imgs/tab_me_pressed_icon.png')} style={styles.iconStyle}/>}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'mine' })}>
            <Mine {...this.props} />
          </TabNavigator.Item>
        </TabNavigator>

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
  iconStyle:{
       width:26,
       height:26,
   },
});
module.exports = MainPage
// AppRegistry.registerComponent('Leisure', () => Leisure);
