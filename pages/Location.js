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

        <PageHeaderText title={this.props.route.name} color='black'></PageHeaderText>
        
        <Text style={{fontSize: 20, fontFamily: 'Caviar Dreams', color: '#323232', paddingTop: 20}}>
          Welcome to the {this.props.route.name} page. We are actively developing this page, so right now
          there is nothing on it. Please come back here another time.
        </Text>
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            onPress={() => this.props.onBack()}
            style={{height:60, marginTop: 50, width: 200, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'black', borderRadius: 10}}>
            <Text style={{fontSize: 20, fontFamily: 'Caviar Dreams', color: '#323232'}}>Back</Text>
          </TouchableHighlight>
        </View>
        

      </Image>);
  }
})

module.exports = Location;