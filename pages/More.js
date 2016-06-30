
var React = require('react-native');
var t = require('tcomb-form-native');
var { AppRegistry, StyleSheet, Text, View, TouchableHighlight } = React;

var Form = t.form.Form;

// here we are: define your domain model
var Feedback = t.struct({
  mail: t.maybe(t.String),      // an optional string
  feedback: t.maybe(t.String),  // an optional string
});

var options = {
  fields: {
    mail: {
      label: 'NetId'
    },
    feedback: {
      label: 'We fancy your feedback:',
      factory: t.form.Textbox
    }
  }
}
var More = React.createClass({
  clearForm() {
      // clear content from all textbox
      this.setState({ value: null });
    },

  onPress: function () {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
      this.clearForm();
      // window.open('mailto:fsw29@cornell.edu?subject=send&body=body');

    }
  },

   componentDidMount() {
    // give focus to the name textbox
    console.log(this.refs.form.getComponent('mail').refs.input.focus());
  },

  render: function() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={Feedback}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = More;