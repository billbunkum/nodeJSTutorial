const request = require('request');

// DARK SKY KEY
const darkskyAPIKey = '297842be681beeba3e18b115c8bab523';
const url = `https://api.darksky.net/forecast/${darkskyAPIKey}/37.8267,-122.4233`;

request( { url: url }, (error, response) => {
	const data = JSON.parse(response.body);
	console.log(data.currently);
});