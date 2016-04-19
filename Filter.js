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
  'North': ['Bear Necessities', 'Carols Cafe', 'North Star Marketplace', 'Risley', 'RPME', 'Sweet Sensations'],
  'West': ['Alice Cook House', 'Carl Becker House', 'Jansen\'s Market', 'Jansens at Bethe House', 'Keeton House', 'Kosher', 'Rose House'],
  'Central': ['Big Red Barn', 'Bus Stop Bagels', 'Cafe Jennie', 'Duffield', 'Goldie\'s Cafe', 'Green Dragon', 'Ivy Room', 'Marthas', 'Okenshields', 'Olin Libe Cafe', 'Rustys', 'Sage', 'Synapsis Cafe', 'Trillium']}

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