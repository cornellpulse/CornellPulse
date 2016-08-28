'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text, 
  View,
} = React;


var UsageBar = React.createClass({
  propTypes : {
    percentage: React.PropTypes.number.isRequired // a number that represents how filled the bar is
  },

  getBarStyle() {
    var barStyle = {
      height: 20, // CAREFUL: this is hardcoded, so adjusting could mess up the view
    }

    if(this.props.percentage >= 70) {
      barStyle['backgroundColor'] = '#b31b1b';
    } else if(this.props.percentage >= 40) {
      barStyle['backgroundColor'] = '#FFF04A';
    } else {
      barStyle['backgroundColor'] = '#7EFF72';
    }
    barStyle['width'] = (100 * this.props.percentage) / 100; //  Formula for sizing color bar: <width of UBar> * <percenatage> / 100
    return barStyle;
  },

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
        <View style={{width:100, height: 20, backgroundColor: '#2d2d2d'}}>
          <View style={this.getBarStyle()}>
          </View>
        </View>
      </View>
    );
  }
})

module.exports = UsageBar;