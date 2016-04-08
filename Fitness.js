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

var UsageBar = require('./UsageBar');

// var RNChart = require('react-native-chart').default;
 
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

// var chartData = [{
//             name: 'LineChart',
//             color: 'gray',
//             lineWidth: 2,
//             highlightIndices: [1, 2],   // The data points at indexes 1 and 2 will be orange
//             highlightColor: 'orange',
//             showDataPoint: true,
//             data: [10, 12, 14, 25, 31, 52, 41, 31, 52, 66, 22, 11],
//         }];

// var xlabels = ['0','1','2','3','4','5','6','7','8','9','10','11'];


class Fitness extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 });
        this.state = { dataSource: ds.cloneWithRows([]) }
    }

    _fetchGymData() {
        /* Fetches the data object from the REST Endpoint and sets it to this.state.dataSource */
        var endpoint = 'http://cornellpulse.com:8080/api';

        fetch(endpoint)
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                this.setState({dataSource: this.state.dataSource.cloneWithRows(responseJSON.gyms)});
            })
            .catch((error) => { console.warn(error); });
    }

    componentDidMount() {
        this._fetchGymData();
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
                renderRow={(rowData) => this._renderRow(rowData)} />
        );
    }

    
}

// This is the rendering of Fitness:
/*<ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this._renderRow(rowData)}
            />*/

/*<RNChart 
    style={styles.chart}
    chartData={chartData}
    verticalGridStep={5}
    xLabels={xlabels} /> */


module.exports = Fitness;


