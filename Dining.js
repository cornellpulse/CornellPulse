'use strict';
 
var React = require('react-native');
 
var {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TouchableHighlight,
    Component,
    SegmentedControlIOS,
   } = React;

var UsageBar = require('./UsageBar.js');
var Location = require('./Location.js');
var Filter = require('./Filter.js');
var PageHeaderText = require('./PageHeaderText');
 


var Dining = React.createClass({
    getInitialState() {

        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 });
        return {dataSource: ds.cloneWithRows([]),
                allData: [] };
    },

    _fetchDinerData() {
        /* Fetches the data object from the REST Endpoint and sets it to this.state.dataSource */
        var endpoint = 'http://cornellpulse.com:3000/api';

        fetch(endpoint)
            .then((response) => response.json())
            .then((responseJSON) => {
                // console.log(responseJSON);
                this.setState({allData: responseJSON.diners,
                               dataSource: this.state.dataSource.cloneWithRows(responseJSON.diners) });
            })
            .catch((error) => { console.warn(error); });
    },

    changeList(list) { 
        /* Sets the data source of the dining component.
        Ultimately, this function get's past to <Filter /> */
        this.setState({dataSource: this.state.dataSource.cloneWithRows(list) });
    },

    componentDidMount() {
        this._fetchDinerData();
    },


    _renderRow(rowData) {
        var count = rowData.count ? rowData.count : 0; // if no count available, then count is 0.
        var peak = rowData.peak == 0 ? 1 : rowData.peak; // so we don't divide by 0 later on in UsageBar
        var ratio = (count/peak) > 1 ? 1 : (count/peak); 
        // Testing image stuff
        return (

                    

         <TouchableHighlight
            underlayColor='#DDDDDD'
            onPress={() => this.props.onForward(Location, rowData.location)}>
            <View style={[styles.container, this.border('white')]}>
                <View style={[styles.block, this.border('white')]}>
                    <View style={[styles.listitem, this.border('white')]}>
                        <View style={[styles.image, this.border('white')]}>
                            <Image
                                style={{height: 40, width: 40, borderColor: 'black', borderWidth: 2}} 
                                source={{uri: rowData.image}}
                                resizeMode='contain' />
                        </View>
                        <View style={[styles.location, this.border('white')]}>
                            <Text>{rowData.location}</Text>
                        </View>
                        <View style={[styles.percentage]}>
                             <UsageBar percentage={ratio * 100}/>
                        </View>
                    </View>
                </View>
                <View style={[styles.separator]}/>
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

            <View style={[styles.container, {paddingTop: 30}]}>
                <PageHeaderText title="Dining" />
                <Filter allData={this.state.allData} changeList={this.changeList}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow} />
            </View>
        );
    }
})

var styles = StyleSheet.create({
    container: {
        // paddingTop: 30, // Makes the filter sit below the carrier info on ios.
        flex: 1, // makes the ListView Scrollable (Do not touch) http://stackoverflow.com/questions/32874559/listview-fails-to-scroll
        alignSelf: 'auto',
        justifyContent: 'center',
    },
    listitem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },
    location: {
        flex: 3
    },
    locationText: {
        fontWeight: 'bold', 
        fontSize: 20,
    },
    image: {
    },
    percentage: {
        flex: 2,
        justifyContent: 'flex-end',
        marginRight: 10
    },
    separator: {    
        borderColor: 'gray',
        borderWidth: 1
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

// var styles = StyleSheet.create({
//     container: {
//         height: 80,
//         alignSelf: 'auto',
        
//     },
//     block: {
//     },
//     listitem: {
//         flexDirection: 'row',
//     },
//     location: {
//         flex: 3
//     },
//     locationText: {
//         fontWeight: 'bold', 
//         fontSize: 20
//     },
//     percentage: {
//         flex: 2,
//         justifyContent: 'flex-end'
//     },
//     description: {
//         fontSize: 20,
//         backgroundColor: 'white'
//     },
//     container: {
//         position: 'absolute', 
//         flexDirection: 'column',
//         top: 30,
//         left: 0,
//         right: 0,
//         bottom: 0
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
//         // borderWidth: 2,
//         // borderColor: "#00ff00",

//     },
//     block: {
//         flexDirection: 'row',
//         // borderWidth: 1,
//         // borderColor: "#dddddd"
//     }
// });

// Image style={styles.logo}>
//                             style={{height: 40, width: 40}}
//                             resizeMode='contain'
//                             source={{uri: rowData.image}} </Image

module.exports = Dining;
