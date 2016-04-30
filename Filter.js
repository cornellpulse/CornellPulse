'use strict'

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  Component,
  TouchableHighlight,
  SegmentedControlIOS
  } = React;

var cardinalLocations = {
  'North': ["Bear Necessities Grill & C-Store", "Carol's Cafe", "North Star Dining Room", "Risley Dining Room", "Robert Purcell Marketplace Eatery", "Sweet Sensations"],
  'West': ["Cook House Dining Room", "Becker House Dining Room", "Jansen's Market", "Jansen's Dining Room at Bethe House", "Keeton House Dining Room", "104West!", "Rose House Dining Room"],
  'Central': ["Big Red Barn", "Bus Stop Bagels", "Café Jennie", "Mattin's Café", "Goldie's Café", "Green Dragon", "Ivy Room", "Martha's Café", "Okenshields", "Amit Bhatia Libe Café", "Rusty's", "Atrium Café", "Synapsis Café", "Trillium"]}

var Filter = React.createClass({
  getInitialState() {
    return {
      values: ['North', 'West', 'Central'],
      selectedIndex: 2,
    }
  },

  _onChange(event) {
    var newIndex = event.nativeEvent.selectedSegmentIndex;
    var filterBy = this.state.values[newIndex];
    // console.log(filterBy);

    var newList = this.filter(filterBy);

    this.setState({selectedIndex: newIndex});
    this.props.changeList(newList);
  },

  filter(delimiter) {
    var cardinal = cardinalLocations[delimiter];
    
    var filteredList = this.props.allData.filter((el) => 
                              cardinal.indexOf(el.location) != -1); 

    return filteredList;
  },



  render() {
    return (
        <View style={styles.outerFilter}>
          <View>
          </View>
          <View>
          </View>
          <View>
          </View>
        </View>
      )
  }
});

var styles = StyleSheet.create({
  outerFilter: { // goes on the box that surrounds West, North, and Central

  },

  innerFilter: { // goes on the 'West', 'North', 'Central' Views

  }
}) 

module.exports = Filter;