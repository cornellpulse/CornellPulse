'use strict'

var React = require('react-native');

var {
  StyleSheet,
  Text,
  TouchableHighlight, 
  TabBarIOS,
  View,
} = React;

var styles = StyleSheet.create({
  backButton: {
    height: 80, 
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "black", 
  },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
})

var Location = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.route.name}</Text>
        <TouchableHighlight
          underlayColor="#DDDDDD"
          onPress={() => this.props.onBack()}
          style={styles.backButton}>
          <Text>Go Back</Text>
        </TouchableHighlight>
      </View>


    );
  }
})

module.exports = Location;