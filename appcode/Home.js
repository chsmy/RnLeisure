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
let SERVER_URI = "http://gank.io/api/data/Android/10/";
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.pageIndex = 1;
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
      dataArry: [],
      loadMore: false,
      isRefreshing: false,
      isError: false
    }
  }
    componentDidMount() {
    this.getListFromRefresh();
  }
  getListFromRefresh() {
    this.pageIndex = 1
    fetch(SERVER_URI + this.pageIndex)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataArry: responseJson.results,
          loadMore: false,
        });
        console.log(responseJson);
        console.log(responseJson.results)
        this.pageIndex++;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  //loadMore 的时候调用
  getListFromLoadMore() {
    this.setState({ loadMore: true })
    fetch(SERVER_URI + this.pageIndex)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataArry: this.state.dataArry.concat(responseJson.results),
          loadMore: false,
        });
        console.log(responseJson);
        this.pageIndex++;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>首页！</Text>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.state.dataArry)}
          // renderRow={(rowData) => <Text>{rowData}</Text>}
          // dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          onEndReached={this.getListFromLoadMore.bind(this)}
          renderFooter={this._renderFooter.bind(this)}
          onEndReachedThreshold={29}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.getListFromRefresh.bind(this)}
              tintColor='#aaaaaa'
              title='Loading...'
              progressBackgroundColor='#aaaaaa' />
          }
          />
      </View>
    );
  }
  //Listview 的条目
  _renderItem(results) {
    let uri =  typeof(results.images)=="undefined"?"https://facebook.github.io/react/img/logo_og.png":results.images[0];
    console.log(uri);
    return (
      <TouchableHighlight 
      >
        <View style={styles.itemContainer}>
          <Image source={{ uri: uri}}
            style={styles.thumbnail} />
            <View style={styles.rightContainer}>
          <Text style={styles.des}>{results.desc}</Text>
          <Text style={[styles.time]}>{results.publishedAt}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  //滑到底部加载 显示的加载动画
  _renderFooter() {
    return (
      this.state.loadMore
        ? (<View style={[styles.indicatorWrapper]}>
          <Animation timingLength={50} duration={500} bodyColor={'#aaaaaa'} />
        </View>)
        : null
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
 itemContainer: {
   flex: 1,
    flexDirection: 'row',
    // height: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginBottom:5
  },
  rightContainer: {
    flex: 1,
    alignSelf: 'stretch',
    // height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight:10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  indicatorWrapper: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#252528'
  },
   thumbnail: {
    width: 80, 
    height: 80,
    
  },
  time: {// alignSelf 默认是center
    fontSize: 12,
    color: 'black',
    textAlign: 'center' // 字的对其方式：center每行都居中；left，right；auto ＝＝＝ justify ＝＝＝ left
  },
  des: {
    fontSize:12,
    color: 'black',
    textAlign: 'center',
  },
 
});
module.exports = Home

