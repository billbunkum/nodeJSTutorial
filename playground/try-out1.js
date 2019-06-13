const https = require('https');

const darkskyAPIKey = '297842be681beeba3e18b115c8bab523';
const darkskyURL = `https://api.darksky.net/forecast/${darkskyAPIKey}/78,-80`;

const request = https.request(darkskyURL, (response) => {
	let data = '';

	response.on('data', (chunk) => {
		data = data + chunk.toString();
	});

	response.on('end', () => {
		const body = JSON.parse(data);
		console.log(body);
	});
});
request.on('error', (error) => {
	console.log('Error message -> ', error);
})

request.end();