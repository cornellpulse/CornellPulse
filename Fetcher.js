'use strict';
 
var React = require('react-native');
 
var {
    View,
    ActivityIndicatorIOS,
    Text,
    AppStateIOS
   } = React;

var Fitness = require('./pages/Fitness.js');
var Dining = require('./pages/Dining.js');

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

    componentDidMount() {
        AppStateIOS.addEventListener('change', (state) => {
            if (state === 'active') {

                this.setState({allData: {}}); // Reset the data
                this._fetchAllData();
            }
        });
    },

	render() {
		if (Object.keys(this.state.allData).length === 0) {
			return(
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontFamily: 'Palatino', color: 'black', paddingBottom: 15}}>Loading...</Text>
                    <ActivityIndicatorIOS animating={true} size='large' color="blue"/>
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