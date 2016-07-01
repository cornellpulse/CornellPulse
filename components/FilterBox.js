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
        name: React.PropTypes.string.isRequired, // name of the filter box: (ie. West, North, Central)
        isHighlighted : React.PropTypes.bool.isRequired,
        onClick : React.PropTypes.func,
    },

    placeHighlight() {
        /*Puts a higlight on the currently selected FilterBox*/
        if (this.props.isHighlighted) {
            return {touchableHighlight: {backgroundColor : "#1E2F64"}, text: {color: '#6ED5E5'}};
        } else {
            return {touchableHighlight: {}, text: {color: 'white'}};
        }
    },
    
    render() {
        return (
            <TouchableHighlight 
                style={[{flex:1}, this.placeHighlight().touchableHighlight]}
                onPress={this.props.onClick}>
                <View>
                    <Text style={[{fontSize: 15, fontWeight: 'bold', fontFamily: "Caviar Dreams", textAlign: 'center', marginTop: 9}, this.placeHighlight().text]}>{this.props.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
})

module.exports = FilterBox;