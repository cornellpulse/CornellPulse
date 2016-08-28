var React = require('react-native');

var PageHeaderText = require('../components/PageHeaderText.js');
var Tabs = require('../Tabs.js');
var {
    View,
    Text,
    Component,
    TouchableHighlight,
    LayoutPropTypes,
    Image
   } = React;

var Home = React.createClass({
    render() {
        return (
            <View style={{flex: 1, paddingTop: 30, margin: 30}}>
                <Text style={{ paddingBottom: 10, alignSelf: 'center', fontFamily: 'Palatino', fontSize: 30, fontWeight: 'bold', color: 'white'}}>Cornell Pulse</Text>

                <Text style={{textAlign: 'center', color: 'white', fontFamily: 'KohinoorBangla-Semibold', fontSize: 20}}>
                    WELCOME!
                    {"\n"}
                    {"\n"}
                    Our simple UI takes the guesswork out of planning a 
                    trip to your favorite 
                    {"\n"}{"\n"}
                    - dining hall {"\n"}{"\n"}
                    - cafe {"\n"}{"\n"}
                    - fitness center {"\n"}{"\n"}
                    by letting you know how busy each facility is.
                </Text>

                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableHighlight
                    underlayColor="#DDDDDD"
                    onPress={() => this.props.onForward(Tabs, 'Tabs')}
                    style={{height:60, marginTop: 50, width: 200, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'white', borderRadius: 10}}>
                    <Text style={{fontSize: 20, fontFamily: 'Palatino', color: '#323232'}}>Go!</Text>
                  </TouchableHighlight>
                </View>
            </View>


        );
    }
})

module.exports = Home;