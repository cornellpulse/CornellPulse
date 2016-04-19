'use strict'

var React = require('react-native');

var Dining = require('./Dining');
var Fitness = require('./Fitness');
var More = require('./More');

var Icon = require('react-native-vector-icons/MaterialIcons');

var {
  StyleSheet,
  Text, 
  TabBarIOS,
  View,
} = React;

var Tabs = React.createClass({
  getInitialState() {
    return {selectedTab: 'Fitness'};
  },

  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItemIOS
          iconName="fitness-center"
          selected={this.state.selectedTab == "Fitness"}
          onPress={() => this.setState({selectedTab: "Fitness"})}
          title="Fitness">

          <Fitness
            {...this.props} // shorthand for sending all props down to Fitness
          />

        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          iconName="email"
          selected={this.state.selectedTab == "Feedback"}
          onPress={() => this.setState({selectedTab: "Feedback"})}
          title="Feedback">

          <More />

        </Icon.TabBarItemIOS>  
        <Icon.TabBarItemIOS
          iconName="restaurant"
          selected={this.state.selectedTab == "Dining"}
          onPress={() => this.setState({selectedTab: "Dining"})}
          title="Dining">

          <Dining 
            {...this.props}
          />

        </Icon.TabBarItemIOS>   
      </TabBarIOS>
    )
  }
})


module.exports = Tabs;