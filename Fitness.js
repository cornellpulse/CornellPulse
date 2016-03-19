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

var RNChart = require('react-native-chart').default;
 
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

var chartData = [{
            name: 'LineChart',
            color: 'gray',
            lineWidth: 2,
            highlightIndices: [1, 2],   // The data points at indexes 1 and 2 will be orange
            highlightColor: 'orange',
            showDataPoint: true,
            data: [10, 12, 14, 25, 31, 52, 41, 31, 52, 66, 22, 11],
        }];

var xlabels = ['0','1','2','3','4','5','6','7','8','9','10','11'];


class Fitness extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 });
        this.state = { dataSource: ds.cloneWithRows(
            [{name:'Noyes',
              picture: 'url',
              data: {},
             },
             {name: "Helen Newmann",
              picture: 'url',
              data: {},
             },
             {name: "Teagle",
              picture: 'url',
              data: {},
              },
              {name: "Appel",
               picture: 'url',
               data: {},
              }])}
    }

    render() {
        
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this._renderRow(rowData)} />
        );
    }

    _renderRow(rowData) {
        return (
            <TouchableHighlight
                underlayColor='#dddddd'>
                <View>
                    <View style={styles.block}>
                        <View style={styles.listitem}>
                            <Text>{rowData.picture}</Text>
                            <Text style={styles.gymName}>{rowData.name}</Text>
                        </View>

                        <RNChart 
                            style={styles.chart}
                            chartData={chartData}
                            verticalGridStep={5}
                            xLabels={xlabels} />
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>
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