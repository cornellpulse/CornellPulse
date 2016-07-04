'use strict'

var React = require('react-native');

var {
  StyleSheet,
  Text,
  TouchableHighlight, 
  TabBarIOS,
  Image,
  View,
} = React;

var PageHeaderText = require('../components/PageHeaderText.js');


var Location = React.createClass({
  render() {
    return (
      <Image 
        style={{flex: 1, width: null, height: null, paddingTop: 30}}
        source={require('../assets/background1.jpg')}>

        <PageHeaderText title={this.props.route.name}></PageHeaderText>
        <View style={{}}>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            onPress={() => this.props.onBack()}
            style={{height:80, justifyContent: 'center', borderWidth: 1, borderColor: 'black'}}>
            <Text>Go Back</Text>
          </TouchableHighlight>
        </View>

      </Image>);
  }
})

module.exports = Location;