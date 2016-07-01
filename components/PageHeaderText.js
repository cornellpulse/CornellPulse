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
		title: React.PropTypes.string.isRequired
	},

	
	render() {
		return (
			<Text style={{paddingBottom: 10, alignSelf: 'center', fontFamily: 'Caviar Dreams', fontSize: 20, fontWeight: 'bold', color: 'white'}}>
				{this.props.title}
			</Text>
		);
	}
})

module.exports = PageHeaderText;