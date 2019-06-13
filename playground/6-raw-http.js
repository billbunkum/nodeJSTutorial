// USING LOW-LEVEL requests BUILT INTO NODEJS
// MAKING https REQUESTS W/O USING request

const https = require('https');

const darkskyAPIKey = '297842be681beeba3e18b115c8bab523';
const darkskyURL = `https://api.darksky.net/forecast/${darkskyAPIKey}/40,-75`;

// WILL RECEIVE 'chunks' AND NEED TO PARSE INTO JSON VARIABLE
// NEED TO STORE THIS VALUE RETURNED VALUE FROM request IN 'const request' OTHERWISE CANNOT ACCESS
const request = https.request(darkskyURL, (response) => {
	
	// WILL STORE CHUNKS 'buffers' IN data
	let data = '';

// LISTENERS -> response.on('noob', callback)
	// FIRES WHEN data COMES IN; THIS RUNS MULTIPLE TIMES
	response.on('data', (chunk) => {
		// STORING chunks AS toString INTO data
		data = data + chunk.toString();
	});

	// FIRES WHEN response FINISHES
	response.on('end', () => {
		// console.log(data);
		const body = JSON.parse(data);
		console.log(body);
	});
});

// ERROR HANDLING
request.on('error', (error) => {
	console.log('An error -> ', error);
});

// request.end() ACTUALLY SENDS THE request
request.end();