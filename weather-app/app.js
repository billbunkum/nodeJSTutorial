const request = require('request');
const geocode = require('./utils/geocode.js');
// const darksky = require('./utils/darksky.js');
const forecast = require('./utils/forecast.js');

const argv = process.argv;
console.log('argv -> ', argv);

const address = process.argv[2];

if (!address) {
	console.log("Provide that sweet 'address' a$$");
} else {
	geocode(address, (error, { latitude, longitude, location }) => {
		if (error) {
			return console.log('Error ', error)
		}
		// console.log('geocode Response -> ', response);
		forecast(latitude, longitude, (error, { daily }) => {
			if (error) {
				return console.log('Error -> ', error);
			}
			console.log('Location -> ', location)
			console.log('Response for daily -> ', daily.summary);
		});
	});
}
