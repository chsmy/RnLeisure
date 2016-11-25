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
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import MainPage from './MainPage'
import Animation from './Animation'
// let SERVER_URI = "http://gank.io/api/data/Android/10/";
let SERVER_BOOK_URI = "https://api.douban.com/v2/book/search?tag=%E6%BC%AB%E7%94%BB&count=10&fields=id,title,subtitle,origin_title,rating,author,translator,publisher,pubdate,summary,images,pages,price,binding,isbn13&start=";
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.pageIndex = 1;
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
      dataArry: [],
      loadMore: false,
      isRefreshing: false,
      isError: false,
      loaded: true,
    }
  }
  componentDidMount() {
    this.getListFromRefresh();
  }
  getListFromRefresh() {
    this.pageIndex = 1
    fetch(SERVER_BOOK_URI + this.pageIndex)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataArry: responseJson.books,
          loadMore: false,
          loaded : false,
        });
        console.log(responseJson);
        this.pageIndex++;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  //loadMore 的时候调用
  getListFromLoadMore() {
    this.setState({ loadMore: true })
    fetch(SERVER_BOOK_URI + this.pageIndex)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataArry: this.state.dataArry.concat(responseJson.books),
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
     if (this.state.loaded) {
      return this.renderLoadingView();
    }
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
 renderLoadingView() {
    return (
      <View style={styles.loading}>
      <ActivityIndicator
        animating={this.state.loaded}
        style={[styles.centering, {height: 80}]}
        size="large"
        color="red"
      />
      </View>
    );
  }
  //Listview 的条目
  _renderItem(books) {
    // let uri =  typeof(books.images)=="undefined"?"https://facebook.github.io/react/img/logo_og.png":books.images[0];
    let uri = books.images.large;
    console.log(uri);
    return (
      <TouchableHighlight
        underlayColor="#0588fe"
        activeOpacity={0.5}

        >
        <View style={styles.itemContainer}>
          <Image source={{ uri: uri }}
            style={styles.thumbnail} />
          <View style={styles.rightContainer}>
            <Text style={styles.des}>{books.title}</Text>
            <Text style={[styles.time]}>{books.publisher}</Text>
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
    backgroundColor: '#F5FCFF',

  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,

  },
  rightContainer: {
    flex: 1,
    alignSelf: 'stretch',
    // height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
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
    height: 100,
    marginLeft: 5
  },
  time: {// alignSelf 默认是center
    fontSize: 12,
    color: 'black',
    textAlign: 'center' // 字的对其方式：center每行都居中；left，right；auto ＝＝＝ justify ＝＝＝ left
  },
  des: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
  },
  loading: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
    centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
module.exports = Home

