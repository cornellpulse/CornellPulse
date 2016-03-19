 'use strict';
 
var React = require('react-native');
var Dining = require('./Dining');
var Fitness = require('./Fitness');
 
var {
    AppRegistry,
    TabBarIOS,
    View,
    TabBarIOS,
    Text,
    StyleSheet
  } = React;
 
class CornellPulse extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedTab: 'tabOne'}
  }
  setTab(tabId) {
    this.setState({selectedTab: tabId})
  }
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="history"
          selected={this.state.selectedTab == 'tabOne'}
          onPress={() => this.setTab('tabOne')}>
          <Fitness />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="bookmarks"
          selected={this.state.selectedTab == 'tabTwo'}
          onPress={() => this.setTab('tabTwo')}>
          <Dining />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab == 'tabThree'}
          onPress={() => this.setTab('tabThree')}>
          <View style={styles.tabContent}>
            <Text style={styles.tabText}> Tab Three </Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
 }

 var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    margin:50,
    fontSize: 45
  }
 });

AppRegistry.registerComponent('CornellPulse', () => CornellPulse);