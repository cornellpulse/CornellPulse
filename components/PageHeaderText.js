'use strict'

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Component,
    SegmentedControlIOS
    } = React;


var PageHeaderText = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
		color: React.PropTypes.string
	},

	
	render() {
		var color = this.props.color ? this.props.color : 'white';
		return (
			<Text style={{paddingBottom: 10, alignSelf: 'center', fontFamily: 'Caviar Dreams', fontSize: 20, fontWeight: 'bold', color: color}}>
				{this.props.title}
			</Text>
		);
	}
})

module.exports = PageHeaderText;