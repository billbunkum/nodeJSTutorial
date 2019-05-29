const request = require('request');

const geocode = require('./utils/geocode.js');
const darksky = require('./utils/darksky.js');

// const darkskyAPIKey = '297842be681beeba3e18b115c8bab523';
// const units = '?units=si';
// QUERY STRINGS APPEAR AT END OF URLS AND BEGIN W/ `?`, CAN ADD MORE USE `&`
// GETS WEATHER INFO BASED ON LAT & LONG VALUES

// const darkskyURL = `https://api.darksky.net/forecast/${darkskyAPIKey}/37.8267,-122.4233${units}`;
// MAPBOX KEY

const mapboxKEY = `pk.eyJ1IjoiYmlsbGJ1bmt1bSIsImEiOiJjanZjeGt5cXAxZmNzNDNyeGZpOGVucTltIn0.7UCD_eQUDmoI1fRJnWrGJw`;
let location = '';
// DARK SKY KEY
const mapboxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapboxKEY}&limit=1`;
// request( { url: url, json: true }, (error, response) => {

// const mapboxKEY = `pk.eyJ1IjoiYmlsbGJ1bmt1bSIsImEiOiJjanZjeGt5cXAxZmNzNDNyeGZpOGVucTltIn0.7UCD_eQUDmoI1fRJnWrGJw`;
// DARK SKY KEY
// const mapboxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapboxKEY}&limit=1`

// request( { url: darkskyURL, json: true }, (error, response) => {

// 	// USE IF 'json: true' OPTION IS NOT USED
// 	// const data = JSON.parse(response.body);
// 	// console.log(data.currently);
// 	console.log(response.body.currently);
// });


// request( { url: url, json: true }, (error, response) => {

// EXAMPLES FOR requestING USING darkskyapi AND mapbox

// request( { url: darkskyURL, json: true }, (error, response) => {

// 	let precipProb = response.body.currently.precipProbability;
// 	let apparentTemp = response.body.currently.apparentTemperature;
// 	console.log(response.body.daily.data[0].summary + ` It is currently ${apparentTemp} degrees out. There is a ${precipProb}% chance of rain.`);
// });


request( { url: mapboxURL, json: true }, (error, response) => {
	// LOW LEVEL 'error' HANDLING
	if( error) {
		console.log('error:', `${error}`);
	} else if( response.body.message) {
		console.log(`error: Location ${response.body.message}`);
	} else {
		// console.log('response =>:', response);
		let latitude = response.body.features[0].geometry.coordinates[1]
		let longitude = response.body.features[0].geometry.coordinates[0];
		console.log(`Longitude is ${longitude} and Latitude is ${latitude}`);

const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

// TAKES INPUT FROM PROCESSED VAR PASSES THRU YARGS AND STORES
// PARSED OUTPUT IN argv

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'The address used for weather',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

// let latitude = 37.8267;
// let longitude = -122.4233;

geocode.getLocation(argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(results.address);
		weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
			if (errorMessage) {
				console.log(`BUTTHOLE ${errorMessage}`);
			} else {
				console.log(
						`It's ${weatherResults.temperature} but feels like ${weatherResults.apparentTemperature}!`
					);
			}
});

	}
});

// request( { url: mapboxURL, json: true }, (error, response) => {
// 	// console.log('response =>:', response);
// 	let latitude = response.body.features[0].geometry.coordinates[1]
// 	let longitude = response.body.features[0].geometry.coordinates[0];
// 	console.log(`Longitude is ${longitude} and Latitude is ${latitude}`);
// });

// 'PROPERTIES' IN THE ANONYMOUS FUNCTION ARE NOT ENFORCED BUT ARE BEST-PRACTICE
geocode('Tokyo', (error, response) => {
	if(error) {
		console.log('Error ', error)
	} else {
		// console.log(response);
		let coordinates = {
			latitude: response.latitude,
			longitude: response.longitude,
			location: response.location
		};
		console.log('coordinates are ', coordinates);
		darksky(coordinates, (error, response) => {
			if (error) {
				console.log(error);
			} else {
				console.log('Weather in ', response.body.timezone, ' is ', response.body.daily.summary);
			}
		});
	}
});