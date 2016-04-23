'use strict'

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Component,
    SegmentedControlIOS
    } = React;

var cardinalLocations = {
  'North': ["Bear Necessities Grill & C-Store", "Carol's Cafe", "North Star Dining Room", "Risley Dining Room", "Robert Purcell Marketplace Eatery", "Sweet Sensations"],
  'West': ["Cook House Dining Room", "Becker House Dining Room", "Jansen's Market", "Jansen's Dining Room at Bethe House", "Keeton House Dining Room", "104West!", "Rose House Dining Room"],
  'Central': ["Big Red Barn", "Bus Stop Bagels", "Café Jennie", "Mattin's Café", "Goldie's Café", "Green Dragon", "Ivy Room", "Martha's Café", "Okenshields", "Amit Bhatia Libe Café", "Rusty's", "Atrium Café", "Synapsis Café", "Trillium"]}

var Filter = React.createClass({
  getInitialState() {
    return {
      values: ['North', 'West', 'Central', 'All'],
      selectedIndex: 3,
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
    if (delimiter != 'All') {
      var cardinal = cardinalLocations[delimiter];

      console.log(this.props.allData);
      
      var filteredList = this.props.allData.filter((el) => 
                                cardinal.indexOf(el.location) != -1); 
      return filteredList;
    } else {
      return this.props.allData;
    }
  },



  render() {
    return (
        <SegmentedControlIOS
          values={this.state.values}
          selectedIndex={this.state.selectedIndex}
          onChange={this._onChange}>
        </SegmentedControlIOS>
      )
  }
})

module.exports = Filter;