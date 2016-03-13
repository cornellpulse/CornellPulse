'use strict';
 
var React = require('react-native');
 
var {
    StyleSheet,
    View,
    Text,
    Component,
    ListView,
    TouchableHighlight
   } = React;
 
var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    }
});

class Fitness extends Component {
     render() {
        return (
        <View style={styles.container}>
            <Text>Fitness Tab</Text>
        </View>
        );
    }
}

module.exports = Fitness;