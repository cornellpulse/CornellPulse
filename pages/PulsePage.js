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
    /*** Old View 
      <Image 
        style={{flex: 1, width: null, height: null, paddingTop: 30}}
        source={require('../assets/CornellBackground.png')}>

        <PageHeaderText title={this.props.route.name} color='black'></PageHeaderText>
        
        <Text style={{margin: 50, fontSize: 20, fontFamily: 'Palatino', color: '#323232', paddingTop: 20}}>
          Welcome to the {this.props.route.name} page. We are actively developing this page, so right now
          there is nothing on it. Please come back here another time.
        </Text>
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            onPress={() => this.props.onBack()}
            style={{height:60, marginTop: 50, width: 200, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'black', borderRadius: 10}}>
            <Text style={{fontSize: 20, fontFamily: 'Palatino', color: '#323232'}}>Back</Text>
          </TouchableHighlight>
        </View>
        

      </Image>
    ***/
    return (
      <View style={{flex:1}}>
        {/*height: 200, width: 379 */}
        <View style={{flex: .5, paddingTop: 30, borderColor: 'black', borderWidth: 2}}>
          <Text>Eye Catching Graphic                         "History" Button</Text>
          
        </View>
        <View style={{flexDirection: 'row', flex: .25, borderColor: 'purple', borderWidth: 2}}>
          <View style={{borderColor: 'red', borderWidth: 2, flex: 1}}>
            <Text>-Name of Location</Text>
            <Text>-Open/Closed + Open Times for Today</Text>
          </View>
          <View style={{borderColor: 'green', borderWidth: 2, flex: 1}}>
            <Text>-Usage Bar for this Location</Text>
            <Text>-Succint Explanation of what Usage Bar is conveying (empty, busy, packed)</Text>
          </View>
        </View>
        <View style={{borderColor: 'pink', borderWidth: 2, flex: 1}}>
          <Text>Menu (Something else for Fitness)</Text>
        </View>
      </View>
      );
  }
})

module.exports = Location;