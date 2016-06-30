'use strict'

var React = require('react-native');

var {
  StyleSheet,
  Text,
  TouchableHighlight, 
  TabBarIOS,
  View,
} = React;


var Location = React.createClass({
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{this.props.route.name}</Text>
        <TouchableHighlight
          underlayColor="#DDDDDD"
          onPress={() => this.props.onBack()}
          style={{height:80, justifyContent: 'center', borderWidth: 1, borderColor: 'black'}}>
          <Text>Go Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
})

module.exports = Location;