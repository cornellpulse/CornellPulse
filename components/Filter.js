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
    filterList: React.PropTypes.array.isRequired, // an array that has the names of the filter categories (ex. ['West', 'North', 'Central', ...])
    filterBy: React.PropTypes.string,
    click: React.PropTypes.func,
  },

  render() {
    return (
      <View style={{flexDirection: 'row', borderColor: '#5C6890', borderTopWidth: 2, borderBottomWidth: 2, height: 40, marginTop: 10}}>
        {this.props.filterList.map((el, inx) => {
          if (el === "All") {
            return (<FilterBox
                    key={inx} 
                    name={el}
                    isHighlighted={el === this.props.filterBy}
                    // By omitting onClick, This Touchable Highlight cannot be pressed.
                  />)
          } else {
            return (<FilterBox
                  key={inx} 
                  name={el}
                  isHighlighted={el === this.props.filterBy}
                  onClick={() => { return this.props.enabled ? this.props.click(el) : undefined }}
                />)
          } 
        } 
        )}
      </View>
    );
  }
})


module.exports = Filter;