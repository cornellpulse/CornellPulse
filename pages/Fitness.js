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

var UsageBar = require('../components/UsageBar');
var Location = require('./Location');
var PageHeaderText = require('../components/PageHeaderText');
var Filter = require('../components/Filter.js');


var cardinalLocations = {
  'North': ["Bear Necessities Grill & C-Store", "Carol's Cafe", "North Star Dining Room", "Risley Dining Room", "Robert Purcell Marketplace Eatery", "Sweet Sensations"],
  'West': ["Cook House Dining Room", "Becker House Dining Room", "Jansen's Market", "Jansen's Dining Room at Bethe House", "Keeton House Dining Room", "104West!", "Rose House Dining Room"],
  'Central': ["Big Red Barn", "Bus Stop Bagels", "Café Jennie", "Mattin's Café", "Goldie's Café", "Green Dragon", "Ivy Room", "Martha's Café", "Okenshields", "Amit Bhatia Libe Café", "Rusty's", "Atrium Café", "Synapsis Café", "Trillium"]}


var Fitness = React.createClass({
    propTypes: {
        allData: React.PropTypes.object,
    },

    getInitialState() {
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 });
        return {filterBy: 'All', dataSource: ds.cloneWithRows(this.props.allData.gyms) };
    },

    click(filterByString) {
        this.setState({filterBy : filterByString}); 
        var subsetList = cardinalLocations[filterByString];

        /* Sets the data source of the dining component.
        Ultimately, this function gets past to <Filter /> */
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 });
        this.setState({dataSource: ds.cloneWithRows(this.props.allData.diners.filter(el => subsetList.includes(el.location)))})
    },

    _renderRow(rowData) {
        var count = rowData.count ? rowData.count : 0; // if no count available, then count is 0.
        var peak = rowData.peak == 0 ? 1 : rowData.peak; // so we don't divide by 0 later on in UsageBar
        var ratio = (count/peak) > 1 ? 1 : (count/peak);  
        return (
            <TouchableHighlight
                underlayColor='#DDDDDD'
                onPress={() => this.props.onForward(Location, rowData.location)}>
                <View style={{justifyContent : 'space-between', flexDirection : 'row', height: 80}}>         
                    <View style={{marginLeft : 20, marginTop: 25}}>
                        <Text style={{fontSize: 20, fontFamily: 'Caviar Dreams', color: 'white'}}>{rowData.location.substr(0,27)}</Text>
                    </View>
                    <View style={{marginRight : 20}}>
                        <UsageBar percentage={ratio * 100}/>
                    </View>
                </View>
            </TouchableHighlight>
        );
    },

    render() {
        return (
                <View style={{height: 700, backgroundColor: "#33648C", paddingTop: 30}}>
                    <PageHeaderText title="Fitness"/>
                    <Filter enabled={false} filterList={["All"]} filterBy={this.state.filterBy} click={this.click} />
                    <ListView
                        style={{backgroundColor: '#33648C'}}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this._renderRow(rowData)} />
                </View>
        );
    },

});

module.exports = Fitness;


