'use strict';
 
var React = require('react-native');
 
var {
    StyleSheet,
    View,
    Text,
    Component,
    ListView,
    TouchableHighlight,
    LayoutPropTypes
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

    render() {
        return (
            <ListView
                style={styles.wrapper}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this._renderRow(rowData)} />
        );
    },

    _renderRow(rowData) {
        var count = rowData.count ? rowData.count : 0; // if no count available, then count is 0.
        var peak = rowData.peak == 0 ? 1 : rowData.peak; // so we don't divide by 0 later on in UsageBar
        var ratio = (count/peak) > 1 ? 1 : (count/peak);  
        return (
            <TouchableHighlight
                underlayColor='#99BECB'
                onPress={() => this.props.onForward(Location, rowData.location)}>
                    <View style={styles.container}>
                        <View style={styles.block}>
                            <View style={styles.listitem}>
                            <View style={styles.location}>
                                <Text style={styles.locationText}>{rowData.location}</Text>
                            </View>
                            <View style={styles.percentage}>
                                 <UsageBar style={styles.bar} percentage={ratio * 100}/>
                            </View>
                            </View>
                        </View>                
                    </View>
            </TouchableHighlight>
        );
    },

    // border: function(color){
    //     return {
    //       borderColor: color,
    //       borderWidth: 4
    //     }
    //   },



})
           
var styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#33648C',
        paddingTop: 30
    },
    container: {
        // backgroundColor: '#33648C',       
        padding: 30,
        height: 80,
        alignSelf: 'auto',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#99BECB",
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
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
        fontSize: 20,
        fontFamily: 'Caviar Dreams',
        color: 'white'
    },
    percentage: {
        flex: 2,
        justifyContent: 'flex-end',
    },
    separator: {    
        // color: "white",
        borderWidth: 1,
        borderColor: "white",
        // opacity: 0.8
    }
});
  

    // height: 36,
    // backgroundColor: '#48BBEC',
    // borderColor: '#48BBEC',
    // borderWidth: 1,
    // borderRadius: 8,
    // marginBottom: 10,
    // alignSelf: 'stretch',
    // justifyContent: 'center'

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


