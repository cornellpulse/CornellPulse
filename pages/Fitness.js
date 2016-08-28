'use strict';
 
var React = require('react-native');
 
var {
    StyleSheet,
    View,
    Text,
    Component,
    ListView,
    TouchableHighlight,
    TouchableOpacity,
    LayoutPropTypes,
    Image
   } = React;

var UsageBar = require('../components/UsageBar');
var Location = require('./Location');
var PageHeaderText = require('../components/PageHeaderText');
var Filter = require('../components/Filter.js');


function filterClosed(locationList, subsetList) {
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

var fitnessLocations = ['Appel', 'Noyes', 'Teagle Up', 'Teagle Down', 'Newman'];

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
        return {filterBy: 'All', dataSource: ds.cloneWithRows(filterClosed(this.props.allData.gyms, fitnessLocations))};
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

        if (rowData.status === "Closed") {
            return (
                <TouchableOpacity
                    underlayColor='#DDDDDD'
                    onPress={() => this.props.onForward(Location, rowData.location)}>
                    <View style={{marginTop: 1, justifyContent : 'space-between', flexDirection : 'row', height: 80, backgroundColor: '#d4d4d4', opacity: .8}}>         
                        <View style={{marginLeft : 20, marginTop: 25}}>
                            <Text style={{fontSize: 20, fontFamily: 'KohinoorBangla-Semibold', color: 'white'}}>{rowData.location}</Text>
                        </View>
                        <View style={{marginRight : 30, marginTop: 25}}>
                            <Text style={{fontSize: 20, fontFamily: 'KohinoorBangla-Semibold', color: 'white'}}>Closed</Text>
                            {/*<UsageBar percentage={ratio * 100}/>*/}
                        </View>
                    </View>
                </TouchableOpacity>);
        } else {
            return (
                <TouchableHighlight
                    underlayColor='#DDDDDD'
                    onPress={() => this.props.onForward(Location, rowData.location)}>
                    <View style={{marginTop: 1, justifyContent : 'space-between', flexDirection : 'row', height: 80, backgroundColor: '#9b9b9b', opacity: 1}}>         
                        <View style={{marginLeft : 20, marginTop: 25}}>
                            <Text style={{fontSize: 20, fontFamily: 'KohinoorBangla-Semibold', color: 'black'}}>{rowData.location}</Text>
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
                <Image 
                    style={{flex: 1, width: null, height: null, paddingTop: 30}}
                    source={require('../assets/CornellBackground.png')}>
                    <PageHeaderText title="Fitness"/>
                    <Filter enabled={false} filterList={["All"]} filterBy={this.state.filterBy} click={this.click} />
                    <ListView
                        style={{}}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this._renderRow(rowData)} />
                </Image>
        );
    },

});

module.exports = Fitness;
