 'use strict';
 
var React = require('react-native');

var Tabs = require('./Tabs.js');

var {
    AppRegistry,
    Navigator,
    NavigatorIOS,
    View,
    Text,
    StyleSheet
  } = React;
 
class CornellPulse extends React.Component {

  _renderScene(route, navigator) {
    var Component = route.component;
    return(
      <Component 
        route={route}
        navigator={navigator}
        onForward={(component, name) => {
          console.log(navigator.getCurrentRoutes());
          var nextIndex = route.index + 1;
          navigator.push({
            name: name,
            index: nextIndex,
            component: component
          });
        }}
        onBack={() => {
          if (route.index > 0) {
            navigator.pop();
          }
        }}
      />
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'Home', index: 0, component: Tabs}}
        renderScene={this._renderScene}
      />
    );
  }
 }

AppRegistry.registerComponent('CornellPulse', () => CornellPulse);