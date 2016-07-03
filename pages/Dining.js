'use strict';
 
var React = require('react-native');
 
var {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TouchableHighlight,
    TouchableOpacity,
    Component,
    SegmentedControlIOS,
   } = React;

var UsageBar = require('../components/UsageBar.js');
var Location = require('./Location.js');
var Filter = require('../components/Filter.js');
var PageHeaderText = require('../components/PageHeaderText');

function shortenName(locationName) {
    /*Shortens the longer location names on this list to their more colloquial names.*/
    var longNames = {"Bear Necessities Grill & C-Store":"Bear Necessities", 
                    "Robert Purcell Marketplace Eatery":"RPCC", 
                    "Jansen's Dining Room at Bethe House":"Bethe House Dining Room"};
    return longNames[locationName] ? longNames[locationName] : locationName;

}

function filterClosed(locationList, subsetList) {
    /*returns */
    var closed = []; // holds location objects that are closed
    var open = []; 

    locationList.forEach(el => {
        if (subsetList.indexOf(el.location) != -1) {
            if (el.status === 'Closed') {
                closed.push(el);
            } else {
                open.push(el);
            }
        } 
    })
    return open.concat(closed);
}

 
var cardinalLocations = {
  'North': ["Bear Necessities Grill & C-Store", "Carol's Cafe", "North Star Dining Room", "Risley Dining Room", "Robert Purcell Marketplace Eatery", "Sweet Sensations"],
  'West': ["Cook House Dining Room", "Becker House Dining Room", "Jansen's Market", "Jansen's Dining Room at Bethe House", "Keeton House Dining Room", "104West!", "Rose House Dining Room"],
  'Central': ["Big Red Barn", "Bus Stop Bagels", "Café Jennie", "Mattin's Café", "Goldie's Café", "Green Dragon", "Ivy Room", "Martha's Café", "Okenshields", "Amit Bhatia Libe Café", "Rusty's", "Atrium Café", "Synapsis Café", "Trillium"]}


var Dining = React.createClass({
    propTypes: {
        allData: React.PropTypes.object,
    },

    getInitialState() {
        var filterBy = "North";
        var subsetList = cardinalLocations[filterBy];


        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 });

        return {filterBy: 'North', dataSource: ds.cloneWithRows(filterClosed(this.props.allData.diners, subsetList))};
    },

    click(filterByString) {
        this.setState({filterBy : filterByString}); 
        var subsetList = cardinalLocations[filterByString];

        /* Sets the data source of the dining component.
        Ultimately, this function gets past to <Filter /> */
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 });
        this.setState({dataSource: ds.cloneWithRows(filterClosed(this.props.allData.diners, subsetList))});
    },


    _renderRow(rowData) {
        var count = rowData.count ? rowData.count : 0; // if no count available, then count is 0.
        var peak = rowData.peak == 0 ? 1 : rowData.peak; // so we don't divide by 0 later on in UsageBar
        var ratio = (count/peak) > 1 ? 1 : (count/peak); 
        
        if (rowData.status === "Closed") {
            return (
                <TouchableOpacity
                    underlayColor='#DDDDDD'
                    onPress={() => this.props.onForward(Location, rowData.location)}>
                    <View style={{justifyContent : 'space-between', flexDirection : 'row', height: 80, backgroundColor: '#545454', opacity: .4}}>         
                        <View style={{marginLeft : 20, marginTop: 25}}>
                            <Text style={{fontSize: 20, fontFamily: 'Caviar Dreams', color: 'white'}}>{shortenName(rowData.location)}</Text>
                        </View>
                        <View style={{marginRight : 20}}>
                            <UsageBar percentage={ratio * 100}/>
                        </View>
                    </View>
                </TouchableOpacity>);
        } else {
            return (
                <TouchableHighlight
                    underlayColor='#DDDDDD'
                    onPress={() => this.props.onForward(Location, rowData.location)}>
                    <View style={{justifyContent : 'space-between', flexDirection : 'row', height: 80}}>         
                        <View style={{marginLeft : 20, marginTop: 25}}>
                            <Text style={{fontSize: 20, fontFamily: 'Caviar Dreams', color: 'white'}}>{shortenName(rowData.location)}</Text>
                        </View>
                        <View style={{marginRight : 20}}>
                            <UsageBar percentage={ratio * 100}/>
                        </View>
                    </View>
                </TouchableHighlight>);
        }
    },

    render() {
        return (
            <View style={{height: 700, backgroundColor: "#33648C", paddingTop: 30}}>
                <PageHeaderText title="Dining" />
                <Filter enabled={true} filterList={["North", "West", "Central"]} filterBy={this.state.filterBy} click={this.click} />
                <ListView
                    style={{backgroundColor: '#33648C'}}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow} />
            </View>
        );
    }
})



module.exports = Dining;
