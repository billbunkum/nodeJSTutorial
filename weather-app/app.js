const request = require('request');

const darkskyAPIKey = '297842be681beeba3e18b115c8bab523';
const units = '?units=si';
// QUERY STRINGS APPEAR AT END OF URLS AND BEGIN W/ `?`, CAN ADD MORE USE `&`
const url = `https://api.darksky.net/forecast/${darkskyAPIKey}/37.8267,-122.4233${units}`;

// MAPBOX KEY
const mapboxKEY = `pk.eyJ1IjoiYmlsbGJ1bmt1bSIsImEiOiJjanZjeGt5cXAxZmNzNDNyeGZpOGVucTltIn0.7UCD_eQUDmoI1fRJnWrGJw`;
let location = '';
// DARK SKY KEY
const mapboxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapboxKEY}&limit=1`;
// request( { url: url, json: true }, (error, response) => {
// 	// USE IF 'json: true' OPTION IS NOT USED
// 	// const data = JSON.parse(response.body);
// 	// console.log(data.currently);
// 	console.log(response.body.currently);
// });

// request( { url: url, json: true }, (error, response) => {
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
	}
});

