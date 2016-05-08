'use strict';

var React = require ("react-native");

var {
  StyleSheet,
  View,
  Text,
  Component
} = React;

var More = React.createClass({
  render() {
    return (
        <View style={[styles.container, this.border('blue')]}>
        <Text style={styles.message}> BINGO</Text>
        </View>
        );
  },

  border: function(color){
        return {
          borderColor: color,
          borderWidth: 4
        }
      },
})


var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  message: {
    fontSize: 20,
    fontFamily: 'Caviar Dreams',
    color: 'white',
        // alignItems: 'center',

  }
  });

module.exports = More;