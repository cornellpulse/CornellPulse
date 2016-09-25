/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Chart from 'react-native-chart';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  UsageBar,
  Dimensions
} from 'react-native';

var days = {"Today": {
    "8": 12,
    "9": 70,
    "10": 33,
    "11": 50,
    "12": 80,
    "13": 100,
    "14": 70,
    "15": 33,
    "16": 33
  }}

const data = [
    [0, 1],
    [1, 3],
    [3, 7],
    [4, 9],
];

var ProjectCharts = React.createClass({
  getInitialState() {
    return {
      'Days': days
    }
  },

  render() {
    return (
      <View style = {styles.main}>
        <View style = {styles.header}>
        <Text style= {{fontSize:30, justifyContent: 'center'}}> Today's avgerage Bustle</Text>
        </View>

        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
        <View style = {styles.barChart}>
          <View style = {styles.barItem}>
            <View style = {{height: (100-days['Today']['8'])*1.5, backgroundColor: '#f6f6f6'}}>
            </View>
            <View style = {{height: (days['Today']['8'])*1.5, backgroundColor: 'skyblue'}}>
              <Text style={styles.text}>8 - 9</Text>
            </View>
          </View>
          <View style = {styles.barItem}>
            <View style = {{height: (100-days['Today']['9'])*1.5, backgroundColor: '#f6f6f6'}}>
            </View>
            <View style = {{height: (days['Today']['9'])*1.5, backgroundColor: 'skyblue'}}>
              <Text style={styles.text}>9 - 10</Text>
            </View>
          </View>
          <View style = {styles.barItem}>
            <View style = {{height: (100-days['Today']['10'])*1.5, backgroundColor: '#f6f6f6'}}>
            </View>
            <View style = {{height: (days['Today']['10'])*1.5, backgroundColor: 'skyblue'}}>
              <Text style={styles.text}>10 - 11</Text>
            </View>
          </View>
          <View style = {styles.barItem}>
            <View style = {{height: (100-days['Today']['11'])*1.5, backgroundColor: '#f6f6f6'}}>
            </View>
            <View style = {{height: (days['Today']['11'])*1.5, backgroundColor: 'skyblue'}}>
              <Text style={styles.text}>11 - 12</Text>
            </View>
          </View>
          <View style = {styles.barItem}>
            <View style = {{height: (100-days['Today']['12'])*1.5, backgroundColor: '#f6f6f6'}}>
            </View>
            <View style = {{height: (days['Today']['12'])*1.5, backgroundColor: 'skyblue'}}>
              <Text style={styles.text}>12 - 13</Text>
            </View>
          </View>
          <View style = {styles.barItem}>
            <View style = {{height: (100-days['Today']['13'])*1.5, backgroundColor: '#f6f6f6'}}>
            </View>
            <View style = {{height: (days['Today']['13'])*1.5, backgroundColor: 'skyblue'}}>
              <Text style={styles.text}>14 - 15</Text>
            </View>
          </View>
          <View style = {styles.barItem}>
            <View style = {{height: (100-days['Today']['14'])*1.5, backgroundColor: '#f6f6f6'}}>
            </View>
            <View style = {{height: (days['Today']['14'])*1.5, backgroundColor: 'skyblue'}}>
              <Text style={styles.text} >16 - 17</Text>
            </View>
          </View>
           <View style = {styles.barItem}>
            <View style = {{height: (100-days['Today']['15'])*1.5, backgroundColor: '#f6f6f6'}}>
            </View>
            <View style = {{height: (days['Today']['15'])*1.5, backgroundColor: 'skyblue'}}>
              <Text style={styles.text}>18 - 19</Text>
            </View>
          </View>
          <View style = {styles.barItem}>
            <View style = {{height: (100-days['Today']['16'])*1.5, backgroundColor: '#f6f6f6'}}>
            </View>
            <View style = {{height: (days['Today']['16'])*1.5, backgroundColor: 'skyblue'}}>
              <Text style={styles.text}>20 - 21</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.menu} >
        <Text style={{textAlign:'center'}} > Here goes the menu desciption </Text>
      </View>

      </View>
  )}
})

const styles = StyleSheet.create({
  main:{
    // borderWidth:4,
    flex: 1
  },
  header: {
    marginTop: 50,
    flex: 0.2,
    // borderWidth:4,
    justifyContent: 'center',
    alignItems: 'center',
    // fontFamily: 'AmericanTypewriter-Bold',
  },
  contentContainer: {
    // borderWidth:8,
    // showsHorizontalScrollIndicator: true,
    flex: 0.1,
    justifyContent:'center',
  },
  barChart:{
    margin:10,

    flexDirection: 'row',
    // borderWidth:4,
    justifyContent: 'space-between',
  },
  barItem:{
    width: 40,
  },
  menu: {
    flex:1.5,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: 'white',
      }
});

AppRegistry.registerComponent('ProjectCharts', () => ProjectCharts);

