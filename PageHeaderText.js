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
			<Text style={styles.header}>
				{this.props.title}
			</Text>
		);
	}
})

var styles = StyleSheet.create({
	header: {
		paddingBottom: 10,
		alignSelf: 'center',
	}
})

module.exports = PageHeaderText;