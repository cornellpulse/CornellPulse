'use strict';
 
var React = require('react-native');
 
var {
    View,
    ActivityIndicatorIOS,
   } = React;

var Fitness = require('./Fitness.js');
var Dining = require('./Dining.js');

var Fetcher = React.createClass({
	getInitialState() {
		return { allData:{} };
	},

	_fetchAllData() {
        /* Fetches the data object from the REST Endpoint and sets it to this.state.dataSource */
        var endpoint = 'http://cornellpulse.com:3000/api';

        fetch(endpoint)
            .then((response) => response.json())
            .then((responseJSON) => {
                // console.log(responseJSON);
                this.setState({allData: responseJSON});
            })
            .catch((error) => { console.warn(error); });
    },

    componentWillMount() {
    	this._fetchAllData();
    },

	render() {
		if (Object.keys(this.state.allData).length === 0) {
			return(
                <View style={{alignItems: 'center'}}>
                    <ActivityIndicatorIOS animating={true} size='large'/>
                </View>

                );
		}
		else if (this.props.display === 'Fitness') {

			return (<Fitness {...this.props} allData={this.state.allData} />);

		} else if (this.props.display === 'Dining') {

            return (<Dining {...this.props} allData={this.state.allData} />);
        }
	}
})

module.exports = Fetcher