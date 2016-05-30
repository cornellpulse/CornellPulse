'use strict'

var React = require('react-native');

var {
  StyleSheet,
  Text, 
  View,
  TouchableHighlight,
} = React;


var FilterBox = React.createClass({
    propTypes: {
        enabled: React.PropTypes.bool,
        name: React.PropTypes.string.isRequired, // name of the filter box: (ie. West, North, Central)
        isHighlighted : React.PropTypes.bool.isRequired,
        onClick : React.PropTypes.func.isRequired,
    },

    placeHighlight() {
        /*Puts a higlight on the currently selected FilterBox*/
        return this.props.isHighlighted ? {backgroundColor : "#DDDDDD"} : {};
    },
    
    render() {
        return (
            <TouchableHighlight 
                style={[{flex:1, borderColor: 'blue', borderWidth: 2}, this.placeHighlight()]}
                onPress={this.props.onClick}>
                <View>
                    <Text>{this.props.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
})

module.exports = FilterBox;