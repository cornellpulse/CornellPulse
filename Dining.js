'use strict';
 
var React = require('react-native');
 
var {
    StyleSheet,
    View,
    Text,
    ListView,
    TouchableHighlight,
    Component,
   } = React;

var UsageBar = require('./UsageBar.js');
 
var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    listitem: {
        height: 80,
    },
    gymName: {
        paddingTop: 40, // half of the listitem height (centers the text vertically)
    },
    chart: {
        height: 80,
        flex: 2,
        borderWidth: 2,
        borderColor: "#00ff00",

    },
    block: {
        flexDirection: 'row',
    }
});


class Dining extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 });
        this.state = { dataSource: ds.cloneWithRows([]) }
    }

    _fetchDinerData() {
        /* Fetches the data object from the REST Endpoint and sets it to this.state.dataSource */
        var endpoint = 'http://cornellpulse.com:8080/api';

        fetch(endpoint)
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                this.setState({dataSource: this.state.dataSource.cloneWithRows(responseJSON.diners)});
            })
            .catch((error) => { console.warn(error); });
    }

    componentDidMount() {
        this._fetchDinerData();
    }


    _renderRow(rowData) {
        var count = rowData.count ? rowData.count : 0; // if no count available, then count is 0.
        var peak = rowData.peak == 0 ? 1 : rowData.peak; // so we don't divide by 0 later on in UsageBar 
        return (
            <TouchableHighlight
                underlayColor='#DDDDDD'>
                <View>
                    <View style={styles.block}>
                        <View style={styles.listitem}>
                            <Text>{rowData.location}</Text>
                        </View>
                        <UsageBar percentage={(count/peak) * 100}/>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow} />
        );
    }
}

module.exports = Dining;