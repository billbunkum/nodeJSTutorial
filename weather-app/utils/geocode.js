const request = require('request');

// COMBINING FUNCTIONS
// CONVERTS ADDRESS USING mapbox THEN USES darksky TO GATHER WEATHER INFO.
const geocode = (address, callback) => {
	const mapboxKEY = `pk.eyJ1IjoiYmlsbGJ1bmt1bSIsImEiOiJjanZjeGt5cXAxZmNzNDNyeGZpOGVucTltIn0.7UCD_eQUDmoI1fRJnWrGJw`;
	const mapboxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYmlsbGJ1bmt1bSIsImEiOiJjanZjeGt5cXAxZmNzNDNyeGZpOGVucTltIn0.7UCD_eQUDmoI1fRJnWrGJw&limit=1';
	request( {url: mapboxURL, json: true}, (error, response) => {
		if (error) {
			callback('Unable to connect to location services', undefined);
		} else if (response.body.features.length === 0) {
			callback('Unable to find location, try another search', undefined);
		} else {
			callback(undefined, {
				latitude: response.body.features[0].center[1],
				longitude: response.body.features[0].center[0],
				location: response.body.features[0].place_name
			});
		}
	});
};

module.exports = geocode;