/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import HourItems from './src/hour-items';
import MenuItem from './src/menu-items';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

var HOURS = [12, 70, 33, 50, 80, 100, 70, 40, 30, 60, 80, 90, 10, 13, 15]

var MENU = { "Soup Station": ['Beef Red Chili'],
  "Salad Bar Station": ['Healthy Style Salad Bar'],
  "Hot Traditional Station  ": ['Fresh Cut Fries ', 
  'Buffalo Wings','Calico Beans','Fresh Beef Burger'],
  "Soup Station2": ['Beef Red Chili'],
  "Salad Bar St22ation": ['Healssthy Style Salad Bar'],
  "Hot Traditionalss Station  ": ['Fresssh Cut Fries ', 
  'Buffalo Wssings','Calssico Beans','Fresh Bssseef Burger'],
  "Soup BLA Station": ['Beef RBLAed Chili'],
  "Salad BLABar Station": ['HealtBLAhy Style Salad Bar'],
  "Hot TraditionaBLAl Station  ": ['FreshBLA Cut Fries ', 
  'Buffalo WiBLAngs','CalBLAico Beans','Fresh BeeBLAf Burger'],
  "Hot Trassditionalss Station  ": ['Fresssh Cut Fries ', 
  'Buffaloss Wssings','Calssico Beans','Fresh Bssseef Burger'],
  "Soup BLssA Station": ['Beef RBLssAed Chili'],
  "Salad BLssABar Station": ['HealtBssLAhy Style Salad Bar'],
  "Hot TradssitionaBLAl Station  ": ['FreshBLA Cut Fries ', 
  'Buffalo WiBLAssngs','CalBLAico Beans','Fresh BeeBLAssf Burger'],}

class Location extends Component {
    _return_by_hour() {
      var data = this.props.HOURS;
      return HOURS.map(function(hour, el){
        return(
         <HourItems  key={el} hour={hour} />
        );
      });
    }

  _return_by_menu() {
    var menu = this.props.Menu;
    return Object.keys(MENU).map(function(title, el) {
      return (
        <MenuItem title={title} menu={MENU[title]} key={el}/>
        )
    })
  }

  render() {
    return (
    

      <View style={styles.main}>
        <Text style={styles.text}> Bears Den </Text>

      <ScrollView contentContainerStyle={styles.contentContainerMain}>
        <Text style={styles.title}> Average Buzz today (per hour)</Text>
        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
        {this._return_by_hour()}
        </ScrollView>

        <View style={styles.menuBox}>
          {this._return_by_menu()}
        </View>
      </ScrollView>

      </View>
    
    );
  }
}

const styles = StyleSheet.create({ 
  contentContainerMain: {
  },
  main: {
    justifyContent: 'center',
    marginTop: 40,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
  title: {
    marginTop: 40,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  menuBox: {
    margin: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    
  }
});


AppRegistry.registerComponent('Location', () => Location);