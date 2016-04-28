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
 
var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        position: 'absolute', 
        top: 30,
        left: 0,
        right: 0,
        bottom: 0
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
        // borderWidth: 1,
        // borderColor: "#dddddd"
    }
});

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
            <View>
                <TouchableHighlight
                    underlayColor='#DDDDDD'
                    onPress={() => this.props.onForward(Location, rowData.location)}>
                    <View style={{flexDirection: "row", flex: 2, borderWidth: 2, borderColor: "black", height: 80}}>
                        <View style={{height: 80, borderWidth: 2, borderColor: "red", flexDirection: "row"}}>
                            <Image
                                style={{height: 40, width: 40}}
                                resizeMode='contain'
                                source={{uri: rowData.image}}
                            />
                            <Text>{rowData.location}</Text>
                        </View>

                        <View style={{borderColor: "pink", borderWidth: 2}}>
                            <UsageBar percentage={ratio * 100}/>
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={styles.separator} />
            </View>
        );
    },

    render() {
        return (
            <View style={styles.container}>
                <Filter allData={this.state.allData} changeList={this.changeList}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow} />
            </View>
        );
    }
})

module.exports = Dining;



/*
<View style={styles.block}>
                            <View style={styles.listitem}>
                                <Text>{rowData.location}</Text>
                            </View>
                            <UsageBar percentage={ratio * 100}/>
                        </View>
                        <Image
                            style={{height: 40, width: 40}}
                            resizeMode='contain'
                            source={{uri: rowData.image}}
                        /> 

 */