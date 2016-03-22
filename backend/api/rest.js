// rest.js
// This script can make a HTTP request to the rest API
function restCall(url,cb) {
    var unirest = require('unirest');
    var rest; // will hold data response body
    // Set host name for RESR Api and authentication
    var Request = unirest.get(url);
    Request.auth({
      user: 'ssit',
      pass: "w!<AW!w_5[u'~D*4",
      sendImmediately: true
    });
    Request.header('Accept', 'application/json').end(function (response) {
        cb(JSON.parse(response.body));
    });
}

// Specialized function for looping through raw
// rest API response and combining the count with out
// existing json, where target is the string for the 
// corresponding unit location.
function parseCount(target,array,type){
	for (var i=0 ; i < array.length ; i++)
	{
	    // Look for corresponding location name, but
	    // avoid '*** Issue' locations
	    if (array[i][type].indexOf(target) > -1 &
	    		array[i][type].indexOf('Issue') == -1) {
	        return array[i]['CustomerCount'];
	    }
	}
}


// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var mysql = require('mysql');

var port = process.env.PORT || 8080;        // set our port

// First  create a connection to the db
var connection = mysql.createConnection({
  host: "pulsardb.cdfrfpjssrqw.us-west-2.rds.amazonaws.com",
  user: "awsuser",
  password: "cornellpulse",
  database: "cornellpulsedb"
});

// Set up json objects that we will populate and respond 
var data = {
	gyms : [],
	diners : []
};

// Set up database query
var strQuery = "SELECT centerName, MAX(count) AS 'weekMax'\
			FROM `Gyms` WHERE WEEK (datetime) = WEEK(now()) \
			AND YEAR( datetime) = YEAR(now()) GROUP BY centerName";

// Run query and store the response in a json
connection.query( strQuery, function(err, rows){
	if(err)	{
		throw err;
	}else{
		// Pull in array from rest call
		restCall('https://api.ssit.scl.cornell.edu/activity/fitness/50', function(counts) {		
			// Push json object for each gym
			rows.forEach(function(gym,index){
				data.gyms.push({
						location:gym.centerName,
						// For count, find matching rest call data
						count: parseCount(gym.centerName,counts,'FacilityName'),
						peak: gym.weekMax});
			});
		});	
	}
});

// Set up database query
var strQuery = "SELECT centerName, MAX(count) AS 'weekMax'\
			FROM `Diners` WHERE WEEK (datetime) = WEEK(now()) \
			AND YEAR( datetime) = YEAR(now()) GROUP BY centerName";

// Run query and store the response in a json
connection.query( strQuery, function(err, rows){
	if(err)	{
		throw err;
	}else{
		// Pull in array from rest call
		restCall('https://api.ssit.scl.cornell.edu/activity/dining/25', function(counts) {		
			// Push json object for each gym
			rows.forEach(function(diner,index){
				data.diners.push({
						location:diner.centerName,
						// For count, find matching rest call data
						count: parseCount(diner.centerName,counts,'DiningUnit'),
						peak: diner.weekMax});
			});
		});	
	}
});


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json(data);   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);