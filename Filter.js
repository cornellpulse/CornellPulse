'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text, 
  View,
  TouchableHighlight,
} = React;

var FilterBox = require('./FilterBox.js');
 

var Filter = React.createClass({
  propTypes: {
    enabled: React.PropTypes.bool,
    filterList: React.PropTypes.array.isRequired, // an array that has the names of the filter segments (ex. ['West', 'North', 'Central', ...])
    filterBy: React.PropTypes.string,
    click: React.PropTypes.func,
  },

  render() {
    return (
      <View style={{flexDirection: 'row', borderColor: 'black', borderWidth: 2, height: 40, marginTop: 10}}>
        {this.props.filterList.map((el, inx) => 
          <FilterBox
            enabled={this.props.enabled}
            key={inx} 
            name={el}
            isHighlighted={el === this.props.filterBy}
            onClick={() => this.props.click(el)}
          />
        )}
      </View>
    );
  }
})


module.exports = Filter;