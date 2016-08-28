'use strict'

var React = require('react-native');

var Dining = require('./pages/Dining');
var Fitness = require('./pages/Fitness');
var More = require('./pages/More');
var Fetcher = require('./Fetcher.js');

var Icon = require('react-native-vector-icons/MaterialIcons');

var {
  StyleSheet,
  Text, 
  TabBarIOS,
  View,
} = React;



var Tabs = React.createClass({
  getInitialState() {
    return {selectedTab: 'Dining'};
  },

  render() {
    return (
      <TabBarIOS>
         <Icon.TabBarItemIOS
          iconName="restaurant"
          selected={this.state.selectedTab == "Dining"}
          onPress={() => this.setState({selectedTab: "Dining"})}>

          <Fetcher
            display={"Dining"}
            {...this.props}
          />

        </Icon.TabBarItemIOS>   
        {/*<Icon.TabBarItemIOS
          iconName="email"
          selected={this.state.selectedTab == "Feedback"}
          onPress={() => this.setState({selectedTab: "Feedback"})}
          title="Feedback">

          <More />

        </Icon.TabBarItemIOS>*/}  
       <Icon.TabBarItemIOS
          iconName="fitness-center"
          selected={this.state.selectedTab == "Fitness"}
          onPress={() => this.setState({selectedTab: "Fitness"})}>

          <Fetcher
            display={"Fitness"}
            {...this.props} // shorthand for sending all props down to Fitness
          />

        </Icon.TabBarItemIOS>
      </TabBarIOS>
    )
  }
})


module.exports = Tabs;