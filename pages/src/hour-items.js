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


class HourItems extends React.Component {
  _render_color() {
    var data = this.props.hour;
    var barColor = {height: data, width: 30};
    if(data>70) {
      barColor['backgroundColor'] = '#87ceeb';
    } else if (data>30) {
      barColor['backgroundColor'] = '#9fd7ef';
    } else {
      barColor['backgroundColor'] = '#9fd7ef';
    }
    return barColor
  }

  render() {
    var data = this.props.hour;
    return (
      <View style={styles.barItem}>

        <View style = {{height: 100-data, backgroundColor: '#f6f6f6', width: 30}}>
        </View>
        <View style = {this._render_color()}>
        </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({ 
  barItem: {
    height: 100,
    margin: 3,
  },
  textTime: {
 }
});

module.exports = HourItems;

