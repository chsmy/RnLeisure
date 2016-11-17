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
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.pageIndex = 0;
    this.dataArry = this.props.dataArry;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
      //  dataSource: ds.cloneWithRows([
      //   'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      // ]),
      dataArry: [],
      loadMore: false,
      isRefreshing: false,
      isError: false
    }
  }
  componentDidMount () {
    this.getMoviesFromApiAsync();
  }
      getMoviesFromApiAsync() {

     fetch('http://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({dataArry : responseJson.results,
        });
        console.log(responseJson);
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
          // onEndReached={this._loadmore.bind(this)}
          // renderFooter={this._renderFooter.bind(this)}
          // onEndReachedThreshold={29}
          // refreshControl={
          //   <RefreshControl
          //     refreshing={this.state.isRefreshing}
          //     onRefresh={this._refresh.bind(this)}
          //     tintColor='#aaaaaa'
          //     title='Loading...'
          //     progressBackgroundColor='#aaaaaa' />
        // } 
        />
      </View>
    );
  }
   _renderItem (results) {
    return (
      <TouchableHighlight onPress= {() => this._skipIntoContent(contentData)
      }>
        <View style={styles.itemContainer}>
          <Text style={styles.date}>{results.type}</Text>
          <Text style={[styles.title]}>{results.publishedAt}</Text>
          <Image source={{uri:results.url}}
            style={styles.thumbnail}/>
        </View>
      </TouchableHighlight>
    )
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
 thumbnail: {
    width: null, // 配合alignSelf实现宽度上 match_parent
    height: 260,
    alignSelf: 'stretch'
  },
  title: {// alignSelf 默认是center
    fontSize: 15,
    marginBottom: 10,
    marginRight: 35,
    marginLeft: 35,
    // letterSpacing: 10,//字间距
    lineHeight: 22, // 行距＋字高，0表示和字高一样，没效果
    color: 'black',
    textAlign: 'center' // 字的对其方式：center每行都居中；left，right；auto ＝＝＝ justify ＝＝＝ left
  },
  date: {
    fontSize: 17,
    color: 'black',
    textAlign: 'center'
  },
});
module.exports = Home

