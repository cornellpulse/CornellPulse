'use strict';
 
var React = require('react-native');
 
var {
    StyleSheet,
    View,
    Text,
    Component,
    ListView,
    TouchableHighlight,
   } = React;

var UsageBar = require('./UsageBar');
var Location = require('./Location');

// var RNChart = require('react-native-chart').default;
 
// var styles = StyleSheet.create({
//     description: {
//         fontSize: 20,
//         backgroundColor: 'white'
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     separator: {
//         height: 1,
//         backgroundColor: '#dddddd'
//     },
//     listitem: {
//         height: 80,
//     },
//     gymName: {
//         paddingTop: 40, // half of the listitem height (centers the text vertically)
//     },
//     chart: {
//         height: 80,
//         flex: 2,
//         borderWidth: 2,
//         borderColor: "#00ff00",
//     },
//     block: {
//         flexDirection: 'row',
//     }

// });


var Fitness = React.createClass({
    getInitialState() {
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 });
        return { dataSource: ds.cloneWithRows([]) };
    },

    _fetchGymData() {
        /* Fetches the data object from the REST Endpoint and sets it to this.state.dataSource */
        var endpoint = 'http://cornellpulse.com:3000/api';

        fetch(endpoint)
            .then((response) => response.json())
            .then((responseJSON) => {
                // console.log(responseJSON);
                this.setState({dataSource: this.state.dataSource.cloneWithRows(responseJSON.gyms)});
            })
            .catch((error) => { console.warn(error); });
    },

    componentDidMount() {
        this._fetchGymData();
    },

    _renderRow(rowData) {
        var count = rowData.count ? rowData.count : 0; // if no count available, then count is 0.
        var peak = rowData.peak == 0 ? 1 : rowData.peak; // so we don't divide by 0 later on in UsageBar
        var ratio = (count/peak) > 1 ? 1 : (count/peak);  
        return (
            <TouchableHighlight
                underlayColor='#DDDDDD'
                onPress={() => this.props.onForward(Location, rowData.location)}>
                    <View style={[styles.container, this.border('white')]}>
                        <View style={[styles.block, this.border('white')]}>
                            <View style={[styles.listitem, this.border('white')]}>
                            <View style={[styles.location, this.border('white')]}>
                                <Text style={styles.locationText}>{rowData.location}</Text>
                            </View>
                            <View style={[styles.percentage, this.border('white')]}>
                                 <UsageBar percentage={ratio * 100}/>
                            </View>
                            </View>
                        </View>
                        <View style={[styles.separator, this.border('white')]}/>
                    </View>
            </TouchableHighlight>
        );
    },

    border: function(color){
        return {
          borderColor: color,
          borderWidth: 4
        }
      },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this._renderRow(rowData)} />
        );
    }

})
           
var styles = StyleSheet.create({
    container: {
        height: 80,
        alignSelf: 'auto',
        
    },
    block: {
    },
    listitem: {
        flexDirection: 'row',
    },
    location: {
        flex: 3
    },
    locationText: {
        fontWeight: 'bold', 
        fontSize: 20
    },
    percentage: {
        flex: 2,
        justifyContent: 'flex-end'
    },
    separator: {    
        
    }

    // height: 36,
    // backgroundColor: '#48BBEC',
    // borderColor: '#48BBEC',
    // borderWidth: 1,
    // borderRadius: 8,
    // marginBottom: 10,
    // alignSelf: 'stretch',
    // justifyContent: 'center'
});
/*<RNChart 
    style={styles.chart}
    chartData={chartData}
    verticalGridStep={5}
    xLabels={xlabels} /> 


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


*/



module.exports = Fitness;


