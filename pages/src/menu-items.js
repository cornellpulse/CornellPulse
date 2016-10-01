/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { requireNativeComponent } from 'react-native';
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';


class MenuItems extends React.Component {
  _map_menu() {
    var menu = this.props.menu;
    return menu.map(function(item, el){
      return(
        <Text style={styles.bodyItem} key={el}>{item}</Text>
        );
    })
  }
  render() {
    var title = this.props.title;
    return (
      <View style={styles.wholeBox}>
        <Text style={styles.headerItems}>{title}</Text>
        {this._map_menu()}
      </View>
      )
  }
}

const styles = StyleSheet.create({ 
  wholeBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerItems: {
    marginTop: 15,
    marginBottom: 2,
    // textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  bodyItem: {
    fontFamily: 'Helvetica',
    fontWeight: '100',

  }

  });


module.exports = MenuItems;