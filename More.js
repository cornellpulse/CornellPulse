 
var React = require('react-native');
 
var {
    StyleSheet,
    View,
    Text,
    Component
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
    }
});

class More extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.description}>
              More tab
            </Text>
        </View>
        );
    }
}

module.exports = More;